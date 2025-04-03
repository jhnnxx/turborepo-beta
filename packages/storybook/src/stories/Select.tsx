import clsx from 'clsx'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import Icon from './Icon'

export interface SelectProps<T extends Record<string, any>> {
  className?: string
  selectClassName?: string
  width?: string
  height?: string
  label?: string
  options: T[]
  labelField?: keyof T
  valueField?: keyof T
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  required?: boolean
  register?: UseFormRegisterReturn
  error?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  maxOption?: number
}

export interface SelectHandle {
  validate: () => boolean
  getValue: () => string
}

const Select = forwardRef(
  <T extends Record<string, any>>(
    {
      width,
      height,
      label,
      options,
      labelField = 'label',
      valueField = 'value',
      value,
      defaultValue,
      onChange,
      placeholder = '옵션을 선택하세요',
      required,
      register,
      error,
      disabled,
      size = 'md',
      className = '',
      selectClassName = '',
      maxOption = 5,
    }: SelectProps<T>,
    ref: any,
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(
      value || defaultValue || '',
    )
    const [dropUp, setDropUp] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const selectRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      validate,
      getValue: () => selectedValue,
    }))

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
      if (isOpen && selectRef.current) {
        const selectBox = selectRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const optionHeight = Number(sizeHeights[size]) // 옵션 하나의 높이
        const optionsHeight = optionHeight * maxOption
        setDropUp(selectBox.bottom + optionsHeight > windowHeight - 10)
      }
    }, [isOpen])

    useEffect(() => {
      if (selectedValue) {
        setErrorMessage(null)
      }
    }, [selectedValue])

    const handleSelect = (val: string) => {
      setSelectedValue(val)
      setIsOpen(false)

      if (register) {
        const fakeEvent = {
          target: {
            name: register?.name || '',
            value: val,
          },
        }
        register.onChange(fakeEvent)
      } else {
        onChange?.(val)
      }
    }

    const validate = () => {
      if (required && !selectedValue) {
        setErrorMessage('옵션을 선택해 주세요.')
        return false
      }
      setErrorMessage(null)
      return true
    }

    const sizeClasses = {
      sm: 'h-[36px] px-[12px] text-sm',
      md: 'h-[44px] px-[12px] text-base',
      lg: 'h-[52px] px-[16px] text-base',
    }

    const sizeHeights = {
      sm: '36',
      md: '44',
      lg: '52',
    }

    return (
      <div
        ref={selectRef}
        className={clsx(
          'flex flex-col',
          className,
          !className?.split(' ').some((cls) => cls.startsWith('w-')) &&
            'w-full',
        )}
        style={{ width, height }}
      >
        {label && (
          <label className="mb-[8px] w-full text-base">
            {label}
            {(required || register) && (
              <span className="text-primary pl-[2px]">*</span>
            )}
          </label>
        )}
        <div className="w-full">
          <div
            className={clsx(
              'relative',
              selectClassName,
              !selectClassName
                ?.split(' ')
                .some((cls) => cls.startsWith('w-')) && 'w-full',
            )}
          >
            <div
              className={clsx(
                'select-border flex w-full cursor-pointer items-center',
                sizeClasses[size],
                { 'cursor-not-allowed': disabled },
              )}
              onClick={() => !disabled && setIsOpen(!isOpen)}
              onBlur={validate}
            >
              <span className="flex-1">
                {selectedValue
                  ? options.find((opt) => opt[valueField] === selectedValue)?.[
                      labelField
                    ]
                  : placeholder}
              </span>
              <Icon
                name={isOpen ? 'arrowTop' : 'arrowBottom'}
                size="default"
                className="ml-1 w-6"
              />
            </div>
            <ul
              style={{
                maxHeight: isOpen
                  ? `${Number(sizeHeights[size]) * maxOption}px`
                  : '0px',
              }}
              className={clsx(
                'select-option-bg select-option-transition absolute z-10 w-full',
                isOpen ? 'overflow-y-auto py-[8px]' : 'overflow-hidden',
                dropUp
                  ? `top-[-4px] translate-y-[-100%]`
                  : `top-[${sizeHeights[size]}px] mt-[4px]`,
              )}
            >
              {options.map((option) => (
                <li
                  key={option[valueField] as string}
                  className={`${sizeClasses[size]} select-option-text flex cursor-pointer items-center`}
                  onClick={() => handleSelect(option[valueField] as string)}
                >
                  {option[labelField]}
                </li>
              ))}
            </ul>
          </div>
          {register && (
            <input type="hidden" name={register?.name} value={selectedValue} />
          )}
          {(errorMessage || error) && (
            <p className="mt-2 text-sm text-red-500">{errorMessage || error}</p>
          )}
        </div>
      </div>
    )
  },
)
Select.displayName = 'Select'
export default Select
