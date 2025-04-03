import { IconColorProps } from '@/types/common/icons'

export default function IconLogin({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.4219 12L3.42187 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.4219 16.0508L14.8993 12.3832L11.4219 8.71557"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.49805 17.6225V18.7662C9.49805 19.8708 10.3935 20.7662 11.498 20.7662H19.4207C20.5253 20.7662 21.4207 19.8708 21.4207 18.7662V6C21.4207 4.89543 20.5253 4 19.4207 4H11.498C10.3935 4 9.49805 4.89543 9.49805 6V7.14366"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
