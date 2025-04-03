import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        {
          'ts-ignore': false, // Allow @ts-ignore without restrictions
          'ts-expect-error': true, // Keep enforcing @ts-expect-error
          'ts-nocheck': false, // Allow @ts-nocheck
          'ts-check': false, // Allow @ts-check
        },
      ],
    },
  },
]

export default eslintConfig
