import Link from 'next/link'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'
import { UrlObject } from 'url'

interface ButtonProps {
  type?: 'button' | 'submit' | 'link'
  children?: ReactNode
  className?: string | undefined
  label?: string
  style?: 'style1' | 'style2' | 'style3' | 'text'
  width?: 'full'
  disabled?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  responseSize?: 'xs' | 'sm' | 'md' | 'lg'
  fontSize?: 'xs' | 'sm' | 'lg'
  line?: boolean
  href?: UrlObject | string
  as?: UrlObject | string
  target?: HTMLAttributeAnchorTarget
  onClick?: () => void
}

export default function Button({
  type,
  children,
  className,
  label,
  style = 'text',
  width,
  disabled,
  size = 'sm',
  responseSize,
  fontSize = 'sm',
  line,
  href = '/',
  as,
  target,
  onClick,
}: ButtonProps) {
  const typeClasses = {
    style1:
      'border button-style1-border button-style1-bg button-style1-text disabled:button-disabled-border disabled:button-disabled-bg disabled:button-disabled-text',
    style2:
      'border button-style2-border button-style2-bg button-style2-text disabled:button-disabled-border disabled:button-disabled-bg disabled:button-disabled-text',
    style3:
      'border button-style3-border button-style3-bg button-style3-text disabled:button-disabled-border disabled:button-disabled-bg disabled:button-disabled-text',
    // style2:
    //   'border border-neutral-300 bg-neutral-white hover:bg-neutral-200 disabled:bg-neutral-200 disabled:border-neutral-200 text-neutral-800 disabled:text-neutral-400',
    // style3:
    //   'border border-neutral-300 bg-neutral-white hover:bg-neutral-black hover:text-neutral-white hover:border-neutral-200 disabled:bg-neutral-200 disabled:border-neutral-200 text-neutral-800 disabled:text-neutral-400',
    // style4:
    //   'bg-neutral-200 hover:bg-neutral-300 disabled:bg-neutral-200 text-neutral-800 disabled:text-neutral-400',
    text: 'text-neutral-500 hover:text-neutral-900' /** check */,
  }

  const sizeClasses = {
    xs: 'h-[36px] px-[8px] text-xs', // h-36 font-12
    sm: 'h-[44px] px-[12px] text-sm', // h-44 font-14
    md: 'h-[52px] px-[24px] text-base', // h-52 font-16
    lg: 'h-[60px] px-[32px] text-lg', // h-60 font-18
  }

  const responseSizeClasses = {
    xs: 'lg:h-[36px] lg:px-[12px] lg:text-sm', // h-36 font-12
    sm: 'lg:h-[44px] lg:px-[12px] lg:text-sm', // h-44 font-14
    md: 'lg:h-[52px] lg:px-[24px] lg:text-base', // h-52 font-16
    lg: 'lg:h-[60px] lg:px-[32px] lg:text-lg', // h-60 font-18
  }

  const fontSizeClasses = { xs: 'text-xs', sm: 'text-sm', lg: 'text-base' }

  // console.log('cla', className, typeClasses)

  const commonClasses = `${style} inline-flex items-center justify-center gap-1 ${width === 'full' && 'w-full'} ${style !== 'text' && `${sizeClasses[size]} ${responseSize !== undefined && responseSizeClasses[responseSize]}`} ${fontSizeClasses[fontSize]} ${line !== undefined && 'underline hover:text-primary-muji'} ${typeClasses[style]} ${className !== undefined && className}`

  if (type === 'link') {
    return (
      <Link
        className={commonClasses}
        href={href}
        onClick={onClick}
        target={target}
        as={as}
      >
        {label && <span>{label}</span>}
        {children && children}
      </Link>
    )
  }

  return (
    <button
      className={commonClasses}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label && <span>{label}</span>}
      {children && children}
    </button>
  )
}
