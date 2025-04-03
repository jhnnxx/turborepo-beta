import { IconColorProps } from '@/types/common/icons'

export default function IconBack({ color }: IconColorProps) {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Outline-icon-40px">
        <path
          id="Vector"
          d="M13 3L4 12L13 21"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
