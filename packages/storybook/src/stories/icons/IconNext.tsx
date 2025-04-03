import { IconColorProps } from '@/types/common/icons'

export default function IconNext({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.59961 4L21.5996 16L9.59961 28"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
