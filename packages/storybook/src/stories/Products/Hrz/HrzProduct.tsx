import IconHeartFill from '@/stories/icons/IconHeartFill'
import IconHeartLine from '@/stories/icons/IconHeartLine'
import Image from 'next/image'
import { HTMLProps, useMemo, useState } from 'react'

type priceInfoType = {
  retail_price: number
  sell_price: number
  discount_rate: number
}

interface ButtonProps {
  className?: string // 박스의 전체 사이즈를 주로 담당
  priceInfo?: priceInfoType
  title?: string
  image?: string
  imageBoxStyle?: HTMLProps<HTMLElement>['className'] // 이미지의 크기를 주로 담당
  isLike?: boolean
}
/** Primary UI component for user interaction */
export default function HrzProduct({
  className,
  priceInfo,
  title,
  image,
  imageBoxStyle,
  isLike,
}: ButtonProps) {
  const commonClasses = `flex lg:gap-[20px] items-center gap-[16px] relative ${className !== undefined && className}`

  const [likeBtn, setLikeBtn] = useState(false)
  const [imgError, setImgError] = useState(false)
  const isSale = useMemo(() => {
    if (priceInfo) return priceInfo?.discount_rate > 0
  }, [priceInfo])

  console.log(imgError)
  return (
    <div className={`${commonClasses}`}>
      <div className={`relative h-[100%] ${imageBoxStyle}`}>
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
        {isLike && (
          <div
            onClick={() => setLikeBtn(!likeBtn)}
            className={`absolute right-[2.22vw] top-[2.22vw] w-[6.67vw] cursor-pointer lg:right-[0.42vw] lg:top-[0.42vw] lg:w-[1.25vw]`}
          >
            {likeBtn ? (
              <IconHeartFill color="var(--tw-primary)" />
            ) : (
              <IconHeartLine color="#D8D8D9" />
            )}
          </div>
        )}
        {/* <div className="text-neutral-0 absolute bottom-0 left-0 z-[10] flex h-full w-full items-center justify-center bg-opacity-50 py-1.5 text-center uppercase">
          <span className="text-neutral-white inline-block text-[16px] font-bold lg:text-[20px]">
            SOLD OUT
          </span>
        </div> */}
      </div>
      <div className="flex flex-col gap-[3.33vw] lg:gap-[0.625vw]">
        <p className="text-[3.89vw] font-semibold leading-[5.55vw] lg:text-[0.94vw] lg:leading-[1.35vw]">
          {title}
        </p>
        <div className={`flex flex-col`}>
          {isSale && (
            <p className={`text-[3.33vw] text-secondary-600 lg:text-[0.73vw]`}>
              {priceInfo?.retail_price?.toLocaleString()}원
            </p>
          )}
          <div
            className={`flex gap-[2.22vw] text-[3.89vw] font-semibold lg:gap-[0.42vw] lg:text-[0.83vw]`}
          >
            {isSale && (
              <p className={`text-primary`}>
                {priceInfo?.discount_rate?.toLocaleString()}%
              </p>
            )}
            <p>{priceInfo?.sell_price?.toLocaleString()}원</p>
          </div>
        </div>
      </div>
    </div>
  )
}
