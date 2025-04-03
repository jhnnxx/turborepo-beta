import { BiPlus } from 'react-icons/bi'
import Button from './Button'

export default function LoadMore({
  total,
  count,
  isCount,
  text,
  callback,
  responseSize = 'md',
}: {
  total?: number
  count?: number
  isCount?: boolean
  text?: string
  responseSize?: 'xs' | 'sm' | 'md' | 'lg'
  callback?: () => void
}) {
  return (
    <div className={`mt-10 text-center lg:mt-16`}>
      {isCount && (
        <div className="text-text-subtitle3 mb-6 text-center max-lg:hidden">
          총{total}개 중 <span className="text-primary">{count}</span>개 표시
        </div>
      )}
      <Button
        label={text ?? `더보기`}
        size="sm"
        responseSize={responseSize}
        style="style2"
        className={`w-full flex-row-reverse lg:h-[52px] ${responseSize === 'lg' ? 'lg:w-[320px]' : 'lg:w-[200px]'} `}
        onClick={callback}
      >
        <BiPlus size="20px" />
      </Button>
    </div>
  )
}
