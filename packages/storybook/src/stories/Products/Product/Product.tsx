import Image from 'next/image'
import { HTMLProps, useMemo, useState } from 'react'
import IconHeartFill from '../../icons/IconHeartFill'
import IconHeartLine from '../../icons/IconHeartLine'

type priceInfoType = {
  retail_price: number
  sell_price: number
  discount_rate: number
}

interface ButtonProps {
  className?: string // 박스의 전체 사이즈를 주로 담당
  priceInfo?: priceInfoType
  bookInfo?: Record<string, string> // 추후 적용 예정
  title?: string
  fontSize?: 'card' | 'xs' | 'sm' | 'md' | 'lg'
  image?: string
  imageBoxStyle?: HTMLProps<HTMLElement>['className'] // 이미지의 크기를 주로 담당
  textBoxStyle?: HTMLProps<HTMLElement>['className'] // 텍스트 박스 전체의 패딩 값을 주로 담담,
  isLike?: boolean
  isBorder?: 'all' | 'img'
  textGap?: 'card' | 'sm' | 'md' | 'lg'
  isCard?: boolean
}
/** Primary UI component for user interaction */
export default function Product({
  className,
  priceInfo,
  bookInfo,
  title,
  fontSize = 'sm',
  image,
  imageBoxStyle,
  textBoxStyle,
  textGap = 'sm',
  isLike,
  isBorder,
  isCard,
}: ButtonProps) {
  const fontSizeClasses = {
    card: 'text-[3.33vw] leading-[3.33vw] lg:text-[0.73vw] lg:leading-[0.73vw]',
    xs: 'text-[3.89vw] leading-[5.55vw]',
    sm: 'text-[3.89vw] leading-[5.55vw] lg:text-[0.83vw] lg:leading-[1.25vw]',
    md: 'text-[4.44vw] leading-[5.67vw] lg:text-[0.94vw] lg:leading-[1.35vw]',
    lg: 'text-[5vw] leading-[5vw] lg:text-[1.25vw] lg:leading-[1.25vw]',
  }

  const saleFontSizeClasses = {
    card: 'text-[12px] leading-[12px]',
    xs: 'text-[14px] leading-[20px]',
    sm: 'text-[3.89vw] leading-[3.89vw] lg:text-[0.83vw] lg:leading-[0.83vw]',
    md: 'text-[4.44vw] leading-[4.44vw] lg:text-[0.83vw] lg:leading-[0.83vw]',
    lg: 'text-[4.44vw] leading-[4.44vw] lg:text-[1.04vw] lg:leading-[1.04vw]',
  }

  const saleRetailFontSizeClasses = {
    card: '',
    xs: 'text-[3.33vw] leading-[3.33vw] lg:text-[0.73vw] lg:leading-[0.73vw]',
    sm: 'text-[3.33vw] leading-[3.33vw] lg:text-[0.73vw] lg:leading-[0.73vw]',
    md: 'text-[3.89vw] leading-[3.89vw] lg:text-[0.73vw] lg:leading-[0.73vw]',
    lg: 'text-[3.89vw] leading-[3.89vw] lg:text-[0.94vw] lg:leading-[0.94vw]',
  }

  const textGapClasses = {
    card: '',
    sm: 'gap-[2.22vw] lg:gap-[0.42vw]',
    md: 'gap-[2.22vw] lg:gap-[0.42vw]',
    lg: 'gap-[2.22vw] lg:gap-[0.625vw]',
  }

  const titleTextGapClasses = {
    card: 'gap-[2.22vw] lg:gap-[0.42vw]',
    sm: 'gap-[3.33vw] lg:gap-[0.625vw]',
    md: 'gap-[3.33vw] lg:gap-[0.83vw]',
    lg: 'gap-[4.44vw] lg:gap-[1.25vw]',
  }

  const commonClasses = `flex flex-col relative ${className !== undefined && className}`

  const [likeBtn, setLikeBtn] = useState(false)
  const [imgError, setImgError] = useState(false)
  const isSale = useMemo(() => {
    if (priceInfo) return priceInfo?.discount_rate > 0
  }, [priceInfo])

  console.log(imgError)
  return (
    <div
      className={`${commonClasses} ${isBorder === 'all' && 'border border-secondary-200'}`}
    >
      <div
        className={`relative ${imageBoxStyle} ${isBorder && 'border-b border-secondary-200'} relative w-[100%] bg-[#F5F5F5]`}
      >
        {!imgError ? (
          <Image
            fill
            src={image || ''}
            onError={() => setImgError(true)}
            alt="상품 이미지"
          />
        ) : (
          <Image
            width={0}
            height={0}
            style={{
              width: '90%',
              height: '100%',
              margin: '0 auto',
              objectFit: 'contain',
            }}
            // @ts-ignore
            src={'/img/dummyLogo.png' || ''}
            alt="상품 이미지"
          />
        )}
        {/* <div className="text-neutral-0 absolute bottom-0 left-0 z-[10] flex h-full w-full items-center justify-center bg-opacity-50 py-1.5 text-center uppercase">
          <span className="inline-block text-[16px] font-bold text-white lg:text-[20px]">
            SOLD OUT
          </span>
        </div> */}
      </div>
      <div
        className={`${textBoxStyle} flex flex-col ${titleTextGapClasses[textGap]}`}
      >
        <p className={`${fontSizeClasses[fontSize]} font-semibold`}>{title}</p>
        {priceInfo && (
          <div className={`flex flex-col ${textGapClasses[textGap]}`}>
            {isSale && (
              <p
                className={`${saleRetailFontSizeClasses[fontSize]} text-secondary-600`}
              >
                {priceInfo?.retail_price?.toLocaleString()}원
              </p>
            )}
            <div
              className={`flex font-semibold ${saleFontSizeClasses[fontSize]} gap-[2.22vw] lg:gap-[0.42vw]`}
            >
              {isSale && (
                <p className={`text-primary`}>
                  {priceInfo?.discount_rate?.toLocaleString()}%
                </p>
              )}
              <p>{priceInfo?.sell_price?.toLocaleString()}원</p>
            </div>
          </div>
        )}
        {bookInfo &&
          (isCard ? (
            <p className="text-[3.33vw] text-[#76767B] lg:text-[0.625vw]">
              {bookInfo?.writer}
            </p>
          ) : (
            <div className="flex items-center gap-[4px] text-[12px] text-[#76767B] lg:gap-[8px] lg:text-[14px]">
              <p>{bookInfo?.writer} 지음</p>
              <div
                content='""'
                className="h-[1px] w-[14px] rotate-[90deg] border-t border-secondary-200"
              ></div>
              <p>{bookInfo?.translator} 옮김</p>
            </div>
          ))}
      </div>

      {isLike && (
        <div
          onClick={() => setLikeBtn(!likeBtn)}
          // @ts-ignore
          className={`${fontSize === 'lg' ? 'right-[12px] top-[12px] 2xl:right-[24px] 2xl:top-[24px]' : 'right-[12px] top-[12px]'} absolute cursor-pointer ${fontSize === ('sm' || 'xs' || 'card') ? 'w-[18px] lg:w-[24px]' : 'w-[24px] lg:w-[32px]'}`}
        >
          {likeBtn ? (
            <IconHeartFill color="var(--tw-primary)" />
          ) : (
            <IconHeartLine color="#D8D8D9" />
          )}
        </div>
      )}
    </div>
  )
}
