import { IconColorProps } from '@/types/common/icons'

export default function IconArrowRight({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99728 5.57551C8.76255 5.80941 8.76255 6.18864 8.99728 6.42253L14.9972 12.4012C15.2319 12.6351 15.6125 12.6351 15.8472 12.4012C16.082 12.1673 16.0819 11.788 15.8472 11.5541L9.84732 5.57551C9.61259 5.34162 9.23201 5.34162 8.99728 5.57551Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99686 18.4232C9.23159 18.6571 9.61216 18.6571 9.84689 18.4232L15.8468 12.4445C16.0815 12.2106 16.0815 11.8314 15.8468 11.5975C15.6121 11.3636 15.2315 11.3636 14.9968 11.5975L8.99686 17.5761C8.76213 17.81 8.76213 18.1893 8.99686 18.4232Z"
        fill={color}
      />
    </svg>
  )
}
