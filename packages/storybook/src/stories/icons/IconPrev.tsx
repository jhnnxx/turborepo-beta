import { IconColorProps } from '@/types/common/icons'

export default function IconPrev({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.4004 4L10.4004 16L22.4004 28"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
