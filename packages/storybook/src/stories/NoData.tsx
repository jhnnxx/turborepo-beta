import Icon from './Icon'

interface NoDataProps {
  isPayment?: boolean
  className?: string
  message?: string
}

export default function NoData({
  isPayment = false,
  message = '검색 결과가 없습니다.',
  className,
}: NoDataProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 text-center ${isPayment ? 'h-[258px]' : 'h-[216px] lg:h-[296px]'} ${className}`}
    >
      <Icon
        name={isPayment ? 'paymentNodata' : 'nodata'}
        className="w-[88px]"
      />
      <p
        className={`${isPayment ? 'text-text-subtitle1' : 'text-secondary-700'} text-lg`}
      >
        {isPayment ? '최근 주문 내역이 없습니다.' : message}
      </p>
    </div>
  )
}
