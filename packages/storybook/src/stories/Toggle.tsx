import {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
  Ref,
} from 'react'

type ToggleColor = `var(${string})` | `#${string}`

interface ToggleProps
  extends PropsWithChildren<ComponentPropsWithoutRef<'input'>> {
  color?: ToggleColor
  label?: string
}

/**
 * @description
 * input 태그를 커스텀하여 만든 토글 컴포넌트입니다.\
 * --tw-primary 값에 따라 동적으로 색상이 변경되며,\
 * 일반적인 input 태그와 유사한 방식으로 사용합니다.
 *
 * @example
 * ```
 * <Toggle
 *   {...register('input')}
 * />
 * ```
 *
 * @param {ToggleColor} props.color - For fixing input color (e.g., `var(--main-color)` or `#FFFFFF`).
 * @param {string} props.label - The label displayed next to the input.
 * @returns {Element} Render Component.
 */
export const Toggle = forwardRef(function Toggle(
  {
    className,
    color, // 색상 고정 파라미터
    label, // 우측 라벨 추가 파라미터
    ...props
  }: ToggleProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <label className={`${className} flex items-center gap-1`}>
      <input ref={ref} className={`peer`} type={'checkbox'} hidden {...props} />
      <div
        className={`relative transition-all duration-200 ease-in-out peer-checked:scale-95 peer-checked:opacity-0 peer-disabled:hidden`}
      >
        <ToggleOffSvg />
      </div>
      <div
        className={`absolute scale-95 opacity-0 transition-all duration-200 ease-in-out peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:hidden`}
      >
        <ToggleOnSvg color={color ? color : `var(--tw-primary)`} />
      </div>
      <div className={`relative hidden peer-disabled:block`}>
        <ToggleDisabledSvg />
      </div>
      {label && <span className={`text-[12px]`}>{label}</span>}
    </label>
  )
})

function ToggleOffSvg() {
  return (
    <svg
      width="48"
      height="28"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="48"
        height="28"
        rx="14"
        transform="matrix(-1 0 0 1 48 0)"
        fill="#D8D8D9"
      />
      <rect
        width="24"
        height="24"
        rx="12"
        transform="matrix(-1 0 0 1 26 1.77783)"
        fill="white"
      />
    </svg>
  )
}

function ToggleOnSvg({ color }: { color: ToggleColor }) {
  return (
    <svg
      width="48"
      height="28"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="28" rx="14" fill={color} />
      <rect x="22" y="1.77783" width="24" height="24" rx="12" fill="white" />
    </svg>
  )
}

function ToggleDisabledSvg() {
  return (
    <svg
      width="48"
      height="28"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="48"
        height="28"
        rx="14"
        transform="matrix(-1 0 0 1 48 0)"
        fill="#C4C4C6"
      />
      <rect
        width="24"
        height="24"
        rx="12"
        transform="matrix(-1 0 0 1 26 1.77783)"
        fill="#EBEBEC"
      />
    </svg>
  )
}
