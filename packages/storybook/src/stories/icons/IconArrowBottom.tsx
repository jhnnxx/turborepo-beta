import { IconColorProps } from '@/types/common/icons'

export default function IconArrowBottom({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8434 8.57443C18.6095 8.3397 18.2303 8.3397 17.9964 8.57443L12.0178 14.5743C11.7839 14.8091 11.7839 15.1896 12.0178 15.4244C12.2517 15.6591 12.6309 15.6591 12.8648 15.4244L18.8434 9.42446C19.0773 9.18973 19.0773 8.80916 18.8434 8.57443Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99773 8.57498C5.76383 8.80971 5.76383 9.19029 5.99773 9.42502L11.9764 15.4249C12.2103 15.6597 12.5895 15.6597 12.8234 15.4249C13.0573 15.1902 13.0573 14.8096 12.8234 14.5749L6.84475 8.57498C6.61085 8.34025 6.23163 8.34025 5.99773 8.57498Z"
        fill={color}
      />
    </svg>
  )
}
