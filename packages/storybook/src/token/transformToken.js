import { registerTransforms } from '@tokens-studio/sd-transforms'
import fs from 'fs'
import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer'
import StyleDictionaryModule from 'style-dictionary'
import { transformTokens } from 'token-transformer'

// token.json 파일 읽기
const tokens = JSON.parse(fs.readFileSync('src/token/tokens.json', 'utf-8'))

// 재귀적으로 변환하는 함수
function tokenValueType(obj) {
  const result = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      // 객체 처리
      if ('value' in value || 'type' in value) {
        result[key] = {}
        if ('value' in value) {
          result[key].value = value.value
        }
        if ('type' in value) {
          result[key].type = value.type
        }
      } else {
        // 중첩된 객체 처리
        result[key] = tokenValueType(value)
      }
    } else if (key === 'value' || key === 'type') {
      // 'value'와 'type'만 포함
      result[key] = value
    }
  }
  return result
}
// 변환 수행
const transformedTokens = tokenValueType(tokens)

// sets 옵션 설정
const sets = [
  'global',
  '#1 Primitive/Light',
  '#2 Semantic/Mode 1',
  '#3 Variable/Mode 1',
] // 변환할 세트 이름들
// excludes 옵션 설정
const excludes = [
  '#1 Primitive/Light',
  '#2 Semantic/Mode 1',
  '#3 Variable/Mode 1',
]
const resolved = transformTokens(transformedTokens, sets, excludes)

console.log('transformedTokens : ----', transformedTokens)

fs.writeFileSync(
  'src/token/tokenBuild.json',
  JSON.stringify(resolved, null, 2),
  'utf-8',
)

registerTransforms(StyleDictionaryModule, {
  casing: 'kebab', // name case 옵션 : [ camel, pascal, snake, kebab, constant ]
})

const sd = StyleDictionaryModule.extend({
  source: ['src/token/tokenBuild.json'],
  platforms: {
    tailwind: {
      transformGroup: 'tokens-studio',
      buildPath: '',
      files: [
        {
          destination: 'src/token/tokenStudio.json',
          format: 'json',
        },
      ],
    },
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'theme.css',
          format: 'css/variables',
        },
      ],
    },
  },
})

sd.buildAllPlatforms()

const types = ['colors', 'shadow', 'screens']

types.map((type) => {
  const StyleDictionary = StyleDictionaryModule.extend(
    makeSdTailwindConfig({
      type,
      source: ['src/token/tokenStudio.json'],
      buildPath: 'src/token/tailwind/',
    }),
  )

  StyleDictionary.buildAllPlatforms()
})
