import { IconColorProps } from '@/types/common/icons'

export default function IconShare({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3032_15282)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.42188 16.9325C4.43667 14.4731 6.22588 13.0775 7.78947 12.7457C9.35307 12.414 10.8418 12.3639 12.2556 12.5954V17L18.8925 9.81277L12.2556 3V7.18641C9.64147 7.20708 7.41913 8.14492 5.58855 10C3.75794 11.8551 2.70239 14.1659 2.42188 16.9325Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3032_15282">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.421875)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
