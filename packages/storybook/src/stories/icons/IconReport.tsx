import { IconColorProps } from '@/types/common/icons'

export default function IconReport({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3811_264770)">
        <g clipPath="url(#clip1_3811_264770)">
          <path
            d="M15 14.5833H5V8.75C5 5.98858 7.23858 3.75 10 3.75C12.7614 3.75 15 5.98858 15 8.75V14.5833Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M3.33398 17.5H16.6673"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3811_264770">
          <rect width="20" height="20" fill="white" />
        </clipPath>
        <clipPath id="clip1_3811_264770">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
