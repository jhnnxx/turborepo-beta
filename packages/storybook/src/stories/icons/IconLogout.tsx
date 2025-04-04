import { IconColorProps } from '@/types/common/icons'

export default function IconLogout({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.4453 11.999L9.44531 11.999"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M17.4453 16.0498L20.9227 12.3822L17.4453 8.71459"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15.8457 7.14309L15.8457 5.99942C15.8457 4.89485 14.9503 3.99942 13.8457 3.99942L5.92307 3.99942C4.8185 3.99942 3.92307 4.89485 3.92307 5.99942L3.92307 18.7656C3.92307 19.8702 4.8185 20.7656 5.92307 20.7656L13.8457 20.7656C14.9503 20.7656 15.8457 19.8702 15.8457 18.7656L15.8457 17.622"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
