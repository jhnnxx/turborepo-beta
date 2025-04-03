import { IconColorProps } from '@/types/common/icons'

export default function IconTextSize({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2690_69042)">
        <path
          d="M14 5.44V4H2V5.44M8 4.24V16M8 16H6.8M8 16H9.2"
          stroke={color}
          strokeWidth="1.44"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 10.72V10H12V10.72M15 10.12V16M15 16H14.4M15 16H15.6"
          stroke={color}
          strokeWidth="1.44"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2690_69042">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
