import {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
  Ref,
} from 'react'

type InputSelectorType = 'square' | 'circle' | 'radio'
type InputSelectorSize = 'sm' | 'md' | 'lg'
type InputSelectorColor = `var(${string})` | `#${string}`

interface InputSelectorProps
  extends PropsWithChildren<Omit<ComponentPropsWithoutRef<'input'>, 'size'>> {
  type?: InputSelectorType
  size?: InputSelectorSize
  color?: InputSelectorColor
  label?: string
}

/**
 * @description
 * input 태그를 커스텀하여 만든 체크박스 및 라디오 타입 컴포넌트입니다.\
 * --tw-primary 값에 따라 동적으로 색상이 변경되며,\
 * 일반적인 input 태그와 유사한 방식으로 사용합니다.
 *
 * @example
 * ```
 * <InputSelector
 *   type={'circle'}
 *   label={'label'}
 *   {...register('input')}
 * />
 * ```
 *
 * @param {InputSelectorType} props.type - The type of the input (default: 'square').
 * @param {InputSelectorSize} props.size - The size of the input (default: responsive).
 * @param {InputSelectorColor} props.color - For fixing input color (e.g., `var(--main-color)` or `#FFFFFF`).
 * @param {string} props.label - The label displayed next to the input.
 * @returns {Element} Render Component.
 */
export const InputSelector = forwardRef(function InputSelector(
  {
    className,
    type = 'square', // 타입 파라미터 (default: square)
    size, // 사이즈 고정 파라미터
    color, // 색상 고정 파라미터
    label, // 우측 라벨 추가 파라미터
    ...props
  }: InputSelectorProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <label className={`${className} flex items-center gap-1 lg:gap-1.5`}>
      <input
        ref={ref}
        className={`peer`}
        type={type === 'radio' ? 'radio' : 'checkbox'}
        hidden
        {...props}
      />
      <div
        className={`${size ? getImageClassFromSize(size) : `h-3 w-3 md:h-3.5 md:w-3.5 lg:h-5 lg:w-5`} relative peer-checked:hidden peer-disabled:hidden`}
      >
        <InputOffSvg type={type} />
      </div>
      <div
        className={`${size ? getImageClassFromSize(size) : `h-3 w-3 md:h-3.5 md:w-3.5 lg:h-5 lg:w-5`} relative hidden peer-checked:block peer-disabled:hidden`}
      >
        <InputOnSvg type={type} color={color ? color : `var(--tw-primary)`} />
      </div>
      <div
        className={`${size ? getImageClassFromSize(size) : `h-3 w-3 md:h-3.5 md:w-3.5 lg:h-5 lg:w-5`} relative hidden peer-disabled:block`}
      >
        <InputDisabledSvg type={type} />
      </div>
      {label && (
        <span
          className={
            size
              ? getTextClassFromSize(size)
              : `text-[12px] md:text-[14px] lg:text-[16px]`
          }
        >
          {label}
        </span>
      )}
    </label>
  )
})

const getImageClassFromSize = (size: InputSelectorSize) => {
  switch (size) {
    case 'sm':
      return '!h-3 !w-3'
    case 'md':
      return '!h-3.5 !w-3.5'
    case 'lg':
      return '!h-5 !w-5'
    default:
      return ''
  }
}

const getTextClassFromSize = (size: InputSelectorSize) => {
  switch (size) {
    case 'sm':
      return '!text-[12px]'
    case 'md':
      return '!text-[14px]'
    case 'lg':
      return '!text-[16px]'
    default:
      return ''
  }
}

function InputOffSvg({ type }: { type: InputSelectorType }) {
  return type === 'square' ? (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H18C18.8284 0.5 19.5 1.17157 19.5 2V18C19.5 18.8284 18.8284 19.5 18 19.5H2C1.17157 19.5 0.5 18.8284 0.5 18V2Z"
        stroke="#C4C4C6"
      />
      <path
        d="M6 10.2666L8.28562 12.6665L14 6.6665"
        stroke="#D8D8D9"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ) : type === 'circle' ? (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#C4C4C6" />
      <path
        d="M9 14.8337L12.0951 18.1668L19.8333 9.8335"
        stroke="#D8D8D9"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3"
        y="3"
        width="14"
        height="14"
        rx="7"
        stroke="#C4C4C6"
        strokeWidth="6"
      />
    </svg>
  )
}

function InputOnSvg({
  type,
  color,
}: {
  type: InputSelectorType
  color: InputSelectorColor
}) {
  return type === 'square' ? (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.285714 2C0.285714 1.05323 1.05323 0.285714 2 0.285714H18C18.9468 0.285714 19.7143 1.05323 19.7143 2V18C19.7143 18.9468 18.9468 19.7143 18 19.7143H2C1.05323 19.7143 0.285714 18.9468 0.285714 18V2Z"
        fill={color}
      />
      <path
        d="M0.285714 2C0.285714 1.05323 1.05323 0.285714 2 0.285714H18C18.9468 0.285714 19.7143 1.05323 19.7143 2V18C19.7143 18.9468 18.9468 19.7143 18 19.7143H2C1.05323 19.7143 0.285714 18.9468 0.285714 18V2Z"
        fill={color}
        strokeWidth="0.571429"
      />
      <path
        d="M6 10.6001L8.28562 13L14 7"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ) : type === 'circle' ? (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill={color} />
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill={color} />
      <path
        d="M9 14.8337L12.0951 18.1668L19.8333 9.8335"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3"
        y="3"
        width="14"
        height="14"
        rx="7"
        stroke={color}
        strokeWidth="6"
      />
    </svg>
  )
}

function InputDisabledSvg({ type }: { type: InputSelectorType }) {
  return type === 'square' ? (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H18C18.8284 0.5 19.5 1.17157 19.5 2V18C19.5 18.8284 18.8284 19.5 18 19.5H2C1.17157 19.5 0.5 18.8284 0.5 18V2Z"
        fill="#EBEBEC"
      />
      <path
        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H18C18.8284 0.5 19.5 1.17157 19.5 2V18C19.5 18.8284 18.8284 19.5 18 19.5H2C1.17157 19.5 0.5 18.8284 0.5 18V2Z"
        stroke="#C4C4C6"
      />
      <path
        d="M6 10.6001L8.28562 13L14 7"
        stroke="#D8D8D9"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ) : type === 'circle' ? (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="#EBEBEC" />
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#C4C4C6" />
      <path
        d="M9 14.8337L12.0951 18.1668L19.8333 9.8335"
        stroke="#D8D8D9"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3"
        y="3"
        width="14"
        height="14"
        rx="7"
        stroke="#EBEBEC"
        strokeWidth="6"
      />
    </svg>
  )
}
