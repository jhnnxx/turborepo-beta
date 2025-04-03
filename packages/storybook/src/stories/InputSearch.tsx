import clsx from 'clsx'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { BiSearch } from 'react-icons/bi'

interface InputSearchProps {
  className?: string
  inputClassName?: string
  width?: string
  height?: string
  label?: string
  value?: string
  style?: 'gray' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xlg'
  onClick?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  onFocus?: () => void
  placeholder?: string
}

export interface InputSearchHandle {
  focus: () => void
  blur: () => void
  getValue: () => string | undefined
}

const InputSearch = forwardRef<InputSearchHandle, InputSearchProps>(
  function Input(
    {
      width,
      height,
      label,
      value,
      style = 'gray',
      size = 'md',
      placeholder = '검색어를 입력해 주세요.',
      onChange,
      onClick,
      onBlur,
      onFocus,
      className = '',
      inputClassName = '',
      ...props
    },
    ref,
  ) {
    const inputSearchRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputSearchRef.current?.focus()
      },
      blur: () => {
        inputSearchRef.current?.blur()
      },
      getValue: () => inputSearchRef.current?.value,
    }))

    const sizeClasses = {
      sm: 'h-[36px] px-[12px] text-sm', // h-36 font-14
      md: 'h-[44px] px-[12px] text-base', // h-44 font-16
      lg: 'h-[52px] px-[16px] text-base', // h-52 font-16
      xlg: 'h-[64px] px-[24px] text-lg', // h-64 font-18
    }

    const inputStyle = {
      input:
        'flex-1 input-text placeholder:input-disabled-text h-full outline-0',
      label: 'text-base mb-[12px]',
    }
    const inputBg = style === 'gray' ? 'input-bg' : 'input-white-bg'
    return (
      <div
        className={clsx(
          'flex flex-col',
          className,
          !className?.split(' ').some((cls) => cls.startsWith('w-')) &&
            'w-full',
        )}
        style={{ width, height }}
      >
        {label && <label className={inputStyle.label}>{label}</label>}
        <div
          className={clsx(
            `flex items-center overflow-hidden ${inputBg} ${sizeClasses[size]} ${inputClassName}`,
          )}
        >
          <input
            ref={inputSearchRef}
            className={`${inputStyle.input} ${inputBg}`}
            type="text"
            value={value ?? ''}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            {...props}
          />
          <div className="flex w-6 justify-center">
            <BiSearch
              size={18}
              color="var(--colors-icon-black)"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    )
  },
)

export default InputSearch
