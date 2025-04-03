import { IconColorProps } from '@/types/common/icons'

export default function IconArrowTop({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99837 15.4246C6.23226 15.6593 6.61149 15.6593 6.84539 15.4246L12.824 9.42469C13.0579 9.18996 13.0579 8.80939 12.824 8.57466C12.5901 8.33992 12.2109 8.33993 11.977 8.57466L5.99837 14.5746C5.76447 14.8093 5.76447 15.1899 5.99837 15.4246Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8441 15.425C19.078 15.1903 19.078 14.8097 18.8441 14.575L12.8654 8.57508C12.6315 8.34035 12.2523 8.34035 12.0184 8.57508C11.7845 8.80981 11.7845 9.19038 12.0184 9.42511L17.997 15.425C18.2309 15.6597 18.6102 15.6597 18.8441 15.425Z"
        fill={color}
      />
    </svg>
  )
}
