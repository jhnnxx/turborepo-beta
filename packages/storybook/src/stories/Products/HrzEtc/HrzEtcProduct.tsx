import IconHeartFill from '@/stories/icons/IconHeartFill'
import IconHeartLine from '@/stories/icons/IconHeartLine'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLProps, useMemo, useState } from 'react'

type priceInfoType = {
  retail_price: number
  sell_price: number
  discount_rate: number
}

type detailInfoType = {
  isShow: boolean
  link: string
  text: string
}

interface ButtonProps {
  className?: string // 박스의 전체 사이즈를 주로 담당
  priceInfo?: priceInfoType
  productInfo?: Record<string, any> // 추후 수정
  title?: string
  image?: string
  imageBoxStyle?: HTMLProps<HTMLElement>['className'] // 이미지의 크기를 주로 담당
  isLike?: boolean
  detailInfo?: detailInfoType
}
/** Primary UI component for user interaction */
export default function HrzEtcProduct({
  className,
  priceInfo,
  productInfo,
  title,
  image,
  imageBoxStyle,
  isLike,
  detailInfo,
}: ButtonProps) {
  const commonClasses = `flex lg:gap-[1.25vw] items-center gap-[3.33vw] relative ${className !== undefined && className}`

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
        <p className="line-clamp-2 text-[3.89vw] font-semibold leading-[5.55vw] lg:text-[0.73vw] lg:leading-[1.04vw]">
          {title}
        </p>
        {productInfo && (
          <div className="flex items-center text-[3.33vw] text-secondary-600 lg:text-[0.625vw]">
            {productInfo?.option1 && (
              <p className="whitespace-pre-wrap">{productInfo?.option1} / </p>
            )}
            {productInfo?.option2 && (
              <p className="whitespace-pre-wrap">{productInfo?.option2} / </p>
            )}
            {productInfo?.option3 && (
              <p className="whitespace-pre-wrap">{productInfo?.option3} </p>
            )}
            <p>{productInfo?.stock}개</p>
          </div>
        )}
        {priceInfo && (
          <div className={`flex flex-col`}>
            <div className={`flex gap-[4px] text-[3.33vw] lg:text-[0.73vw]`}>
              {isSale && (
                <p className="text-secondary-500">
                  {priceInfo?.retail_price?.toLocaleString()}원
                </p>
              )}
              <p className="font-semibold">
                {priceInfo?.sell_price?.toLocaleString()}원
              </p>
            </div>
          </div>
        )}
        {detailInfo && detailInfo.isShow && (
          <Link
            href={detailInfo.link}
            className="text-[3.33vw] text-secondary-600 underline lg:text-[0.625vw]"
          >
            {detailInfo.text}
          </Link>
        )}
      </div>
    </div>
  )
}
