import { IconColorProps } from '@/types/common/icons'

export default function IconCart({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.4219 4.62109L19.1324 13.1145C18.8971 13.9875 18.1055 14.594 17.2014 14.594H9.39346C8.48845 14.594 7.69622 13.9863 7.46175 13.1121L5.68435 6.48588L5.56054 6.06126C5.31171 5.20784 4.52945 4.62109 3.6405 4.62109H2.42188"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="8.40265"
        cy="18.9185"
        rx="1.63116"
        ry="1.62162"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <ellipse
        cx="18.1898"
        cy="18.9185"
        rx="1.63116"
        ry="1.62162"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
