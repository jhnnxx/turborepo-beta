import { IconColorProps } from '@/types/common/icons'

export default function IconBellOn({ color }: IconColorProps) {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.74 17.16H5.5C5.095 17.16 4.72 16.995 4.435 16.71C4.15 16.425 4 16.05 4 15.645C4 15.375 4.075 15.12 4.21 14.895C4.645 14.13 5.185 12.675 5.185 10.08V9.465C5.185 5.91 8.065 3 11.635 3C15.205 3.03 18.085 5.955 18.085 9.525V10.08C18.085 12.675 18.61 14.13 19.06 14.895C19.255 15.24 19.315 15.645 19.21 16.035C19.105 16.425 18.865 16.755 18.52 16.95C18.295 17.085 18.025 17.16 17.755 17.16H17.74Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M8.63086 19C8.63086 20.659 9.99197 22 11.6447 22H11.617C13.2836 22 14.6309 20.6452 14.6309 19"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle cx="20.8016" cy="2.2" r="2.2" fill="#DC063A" />
    </svg>
  )
}
