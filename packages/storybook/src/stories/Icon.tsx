'use client'

import { MouseEventHandler, useState } from 'react'
import IconApple from './icons/IconApple'
import IconArrowBottom from './icons/IconArrowBottom'
import IconArrowLeft from './icons/IconArrowLeft'
import IconArrowRight from './icons/IconArrowRight'
import IconArrowTop from './icons/IconArrowTop'
import IconBack from './icons/IconBack'
import IconBell from './icons/IconBell'
import IconBellOn from './icons/IconBellOn'
import IconCalendar from './icons/IconCalendar'
import IconCamera from './icons/IconCamera'
import IconCart from './icons/IconCart'
import IconCloseCircle from './icons/IconCloseCircle'
import IconCopy from './icons/IconCopy'
import IconError from './icons/IconError'
import IconHome from './icons/IconHome'
import IconKakao from './icons/IconKakao'
import IconKakaoTalk from './icons/IconKakaoTalk'
import IconLogin from './icons/IconLogin'
import IconLogout from './icons/IconLogout'
import IconLongNext from './icons/IconLongNext'
import IconLongNext2 from './icons/IconLongNext2'
import IconMore from './icons/IconMore'
import IconNaver from './icons/IconNaver'
import IconNblog from './icons/IconNblog'
import IconNext from './icons/IconNext'
import IconNodata from './icons/IconNodata'
import IconNpost from './icons/IconNpost'
import IconPaymentCompleted from './icons/IconPaymentCompleted'
import IconPaymentNodata from './icons/IconPaymentNodata'
import IconPrev from './icons/IconPrev'
import IconReport from './icons/IconReport'
import IconShare from './icons/IconShare'
import IconTextSize from './icons/IconTextSize'

const ICON_MAP = {
  arrowTop: IconArrowTop,
  arrowBottom: IconArrowBottom,
  arrowLeft: IconArrowLeft,
  arrowRight: IconArrowRight,
  prev: IconPrev,
  next: IconNext,
  back: IconBack,
  bell: IconBell,
  bellOn: IconBellOn,
  calendar: IconCalendar,
  camera: IconCamera,
  cart: IconCart,
  closeCircle: IconCloseCircle,
  copy: IconCopy,
  home: IconHome,
  login: IconLogin,
  logout: IconLogout,
  report: IconReport,
  share: IconShare,
  textSize: IconTextSize,
  more: IconMore,
  longNext: IconLongNext,
  longNext2: IconLongNext2,
  apple: IconApple,
  kakao: IconKakao,
  kakaoTalk: IconKakaoTalk,
  naver: IconNaver,
  naverBlog: IconNblog,
  naverPost: IconNpost,
  error: IconError,
  nodata: IconNodata,
  paymentNodata: IconPaymentNodata,
  paymentCompleted: IconPaymentCompleted,
}

const sizeClasses = {
  '3xs': 'w-3', // 12
  '2xs': 'w-[14px]', // 14
  xs: 'w-4', // 16
  sm: 'w-5', // 20
  default: 'w-6', // 24
  md: 'w-7', // 28
  lg: 'w-8', // 32
  xl: 'w-10', // 40
}

const colorType = {
  primary: 'var(--tw-primary)',
  black: 'var(--colors-icon-black)',
  gray100: 'var(--colors-icon-gray-100)',
  gray200: 'var(--colors-icon-gray-200)',
  gray300: 'var(--colors-icon-gray-300)',
  gray500: 'var(--colors-icon-gray-500)',
  gray600: 'var(--colors-icon-gray-600)',
  white: 'var(--colors-icon-white)',
  red: 'var(--colors-icon-red)',
}

export interface IconProps {
  className?: string
  name: keyof typeof ICON_MAP
  color?: keyof typeof colorType
  size?: keyof typeof sizeClasses
  onClick?: MouseEventHandler<HTMLElement>
}

/**
 *
 * @param {string} className
 * @param {string} name
 * @param {string} size - '3xs':12px | '2xs':14px | 'xs':16px | 'sm':20px | 'default':24px | 'md':28px | 'lg':32px | 'xl':40px
 * @param {void} onClick
 * @returns <i></i>
 */
export default function Icon({
  className,
  name,
  size = 'default',
  color = 'black',
  onClick,
}: IconProps) {
  const IconComponent = ICON_MAP[name]

  if (!IconComponent) return null

  return (
    <i
      className={`inline-flex cursor-pointer items-center justify-center [&_svg]:object-fill ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      <IconComponent color={colorType[color]} />
    </i>
  )
}

export function HoverIcon({
  className,
  name,
  size = 'default',
  color = 'black',
  onClick,
}: IconProps) {
  const [hover, setHover] = useState(false)

  return (
    <i
      className={`inline-flex cursor-pointer items-center justify-center object-fill ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {name === 'arrowTop' && (
        <IconArrowTop color={hover ? 'var(--tw-primary)' : color} />
      )}
      {name === 'arrowBottom' && (
        <IconArrowBottom color={hover ? 'var(--tw-primary)' : color} />
      )}
    </i>
  )
}
