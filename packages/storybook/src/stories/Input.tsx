import Button from '@/stories/Button'
import clsx from 'clsx'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Icon, { IconProps } from './Icon'

interface BaseInputProps {
  className?: string
  labelClassName?: string
  inputClassName?: string
  buttonClassName?: string
  width?: string
  height?: string
  label?: string
  value?: string
  type?: string
  style?: 'text' | 'password' | 'delete' | 'button'
  buttonText?: string
  size?: 'sm' | 'md' | 'lg'
  required?: boolean
  disabled?: boolean
  iconClick?: () => void
  buttonClick?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  onFocus?: () => void
  textMaxSize?: string
  placeholder?: string
  readOnly?: boolean
  pattern?:
    | 'userId'
    | 'password'
    | 'email'
    | 'phone'
    | 'tel'
    | 'date'
    | 'onlyNumber'
  validateOnChange?: boolean
  register?: UseFormRegisterReturn
  error?: string
}

interface InputWithRegister extends BaseInputProps {
  register: UseFormRegisterReturn
  validateOnChange?: never
}

interface InputWithoutRegister extends Omit<BaseInputProps, 'register'> {
  register?: undefined
  validateOnChange?: boolean
}

type InputProps = InputWithRegister | InputWithoutRegister

export interface InputHandle {
  focus: () => void
  blur: () => void
  getValue: () => string | undefined
  validate: () => boolean
}

const Input = forwardRef<InputHandle, InputProps>(function Input(
  {
    width,
    height,
    label,
    value,
    type = 'text',
    style = 'text',
    size,
    buttonText = '확인',
    placeholder = '정보를 입력해주세요.',
    readOnly,
    required,
    disabled,
    onChange,
    onFocus,
    iconClick,
    buttonClick,
    onBlur,
    className = '',
    labelClassName = '',
    inputClassName = '',
    buttonClassName = '',
    pattern,
    validateOnChange = false,
    register,
    error,
    ...props
  },
  ref,
) {
  const [iconStyle, setIconStyle] = useState('off')
  const [passwordType, setPasswordType] = useState(type)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [internalError, setInternalError] = useState<string | null>(null)
  /* 괄호 삭제 */
  // const removeParentheses = /\(([^)]*)\)/g

  /* 공백 제거하기 */
  // const regexRemoveSpaces = /(\s*)/g

  // 정규식 패턴 정의
  const patterns = {
    userId: {
      pattern: /^[a-zA-Z]{1}[0-9a-zA-Z]{5,19}$/g,
      required: '아이디는 필수 입력입니다.',
      message: '6~20자의 영문/숫자 조합만 사용 가능합니다.',
    },
    password: {
      pattern:
        /^(?=.*?[A-Za-z])(?=.*?\d)(?=.*?[`~!@#\\$%^\\&*\\(\\)])[A-Za-z\d`~!@#\\$%^\\&*\\(\\)]{10,31}$/,
      required: '비밀번호는 필수 입력입니다.',
      message: '영문, 숫자, 특수문자를 포함한 10~31자리 비밀번호가 필요합니다.',
    },
    email: {
      pattern: /^[^@]+@[^@]+\.[^@]+$/,
      required: '이메일은 필수 입력입니다.',
      message: '올바른 이메일 형식이 아닙니다.',
    },
    phone: {
      pattern: /^\d{3}-?\d{3,4}-?\d{4}$/,
      required: '핸드폰번호는 필수 입력입니다.',
      message: '올바른핸드폰 번호 형식이 아닙니다. (ex: 010-1234-5678)',
    },
    tel: {
      pattern: /^\d{9,11}$/,
      required: '전화번호는 필수 입력입니다.',
      message: '올바른 전화번호 형식이 아닙니다. (9~11자리 숫자)',
    },
    date: {
      pattern: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/g,
      required: '날짜는 필수 입력입니다.',
      message: '올바른 날짜 형식이 아닙니다. (ex: 2025-01-01)',
    },
    onlyNumber: {
      pattern: /^[0-9]*$/,
      required: '숫자는 필수 입력입니다.',
      message: '숫자만 입력 가능합니다.',
    },
  }

  // /* 사원번호 숫자만 */
  // const regexAuthNumber = {
  //   pattern: /^\d{8}$/,
  //   message: ''
  // }

  // 정규식 검증 함수
  const validatePattern = (
    value: string,
  ): { isValid: boolean; message?: string } => {
    if (!pattern) return { isValid: true }

    const patternObj = patterns[pattern]
    if (!patternObj) return { isValid: true }

    const trimmedValue = value.trim()

    // required 가 false 이고 값이 비어있으면 통과
    if (!required && trimmedValue === '') {
      return { isValid: true }
    }

    // required + 빈 값 처리
    if (required && trimmedValue === '') {
      return { isValid: false, message: patternObj.required }
    }

    // pattern 테스트
    const regex = new RegExp(patternObj.pattern)
    const isValid = regex.test(trimmedValue)

    return { isValid, message: isValid ? undefined : patternObj.message }
  }

  // 입력값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value

    if (register) {
      register.onChange(e)
      return
    }

    onChange?.(e)

    if (validateOnChange) {
      // 값이 있으면 필수 에러 제거
      if (required && !pattern) {
        if (currentValue === '') {
          setInternalError(error || '필수 입력 입니다.')
        } else {
          setInternalError(null)
        }
      }

      if (pattern) {
        const { isValid, message } = validatePattern(currentValue)
        setInternalError(isValid ? null : message || null)
      }
    }
  }
  // onBlur 이벤트 핸들러
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (register) {
      register.onBlur(e)
      return
    }

    onBlur?.()

    const currentValue = inputRef.current?.value || ''

    if (required && !pattern && currentValue === '') {
      setInternalError(error || '필수 입력 입니다.')
      return
    }

    if (pattern) {
      const { isValid, message } = validatePattern(currentValue)
      setInternalError(isValid ? null : message || null)
    } else {
      setInternalError(null)
    }
  }

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getValue: () => inputRef.current?.value,
    validate: () => {
      const currentValue = inputRef.current?.value?.trim()

      // required 만 사용한 경우 검증
      if (required && !currentValue) {
        setInternalError(error || '필수 입력 입니다.') // props.error 활용
        return false
      }

      // pattern 사용한 경우 기존 로직 유지
      if (pattern) {
        const { isValid, message } = validatePattern(currentValue || '')
        setInternalError(isValid ? null : message || null)
        return isValid
      }

      setInternalError(null)
      return true
    },
  }))

  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === 'password' ? 'text' : 'password',
    )
    setIconStyle((prevStyle) => (prevStyle === 'off' ? 'on' : 'off'))
  }

  const IconName: { [key: string]: Record<string, React.ReactNode | string> } =
    {
      password: {
        off: (
          <FiEyeOff
            size={20}
            className="text-icon-gray-500"
            onClick={togglePassword}
          />
        ),
        on: (
          <FiEye
            size={20}
            className="text-icon-gray-500"
            onClick={togglePassword}
          />
        ),
      },
      delete: {
        off: 'closeCircle',
      },
    }

  const sizeClasses = {
    sm: 'h-[36px] px-[12px] text-sm', // h-36 font-14
    md: 'h-[44px] px-[12px] text-base', // h-44 font-16
    lg: 'h-[52px] px-[16px] text-base', // h-52 font-16
  }

  const inputStyle = {
    content: clsx(
      'overflow-hidden flex',
      disabled ? 'input-disabled-bg' : 'input-bg',
      size
        ? sizeClasses[size]
        : `text-sm h-[36px] px-[12px] md:text-base md:h-[44px] lg:h-[52px] lg:px-[16px]`,
      inputClassName,
      style === 'button' ? 'flex-1' : '',
      !inputClassName?.split(' ').some((cls) => cls.startsWith('w-')) &&
        'w-full',
    ),
    input:
      'input-text input-bg disabled:input-disabled-bg disabled:input-disabled-text placeholder:input-disabled-text w-full h-full flex-1 outline-0',
    label: clsx(!labelClassName ? 'text-base mb-[12px]' : labelClassName),
    button: clsx(
      'px-2',
      buttonClassName,
      !buttonClassName?.split(' ').some((cls) => cls.startsWith('h-')) &&
        'h-auto',
    ),
    error: 'text-sm text-primary-error mt-[12px]',
  }

  return (
    <div
      className={clsx(
        'flex flex-col',
        className,
        !className?.split(' ').some((cls) => cls.startsWith('w-')) && 'w-full',
      )}
      style={{
        ...(width && { width }),
        ...(height && { height }),
      }}
    >
      {label && (
        <label className={inputStyle.label}>
          {label}
          {(required || register) &&
            !labelClassName?.includes('no-required') && (
              <span className="text-primary pl-[2px]">*</span>
            )}
        </label>
      )}
      <div className={'flex gap-2'}>
        <div className={inputStyle.content}>
          <input
            ref={(element) => {
              // 내부 ref 설정
              inputRef.current = element
              // register 가 있는 경우에만 register.ref 설정
              register?.ref?.(element)
            }}
            className={inputStyle.input}
            type={style === 'password' ? passwordType : type}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            disabled={disabled}
            name={register?.name}
            readOnly={readOnly}
            {...props}
          />
          {IconName[style] && (
            <div className="flex w-6 cursor-pointer items-center justify-center">
              {style === 'password' ? (
                IconName[style][iconStyle]
              ) : (
                <Icon
                  name={
                    (IconName[style][iconStyle] ??
                      IconName[style].off) as unknown as IconProps['name']
                  }
                  size={'sm' as IconProps['size']}
                  onClick={iconClick}
                  className="h-full"
                />
              )}
            </div>
          )}
        </div>
        {style === 'button' && (
          <Button
            className={inputStyle.button}
            label={buttonText}
            style="style1"
            type="button"
            onClick={buttonClick}
            disabled={disabled}
          />
        )}
      </div>
      {(internalError || (register && error)) && (
        <p className={inputStyle.error}>{internalError || error}</p>
      )}
    </div>
  )
})

export default Input
