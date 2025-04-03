import { IconColorProps } from '@/types/common/icons'

export default function IconHome({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5846 3.82735L21.0013 7.74711V20.5833H4.16797V7.74711L12.5846 3.82735Z"
        stroke={color}
        strokeWidth={color}
        stroke-miterlimit="10"
      />
      <path
        d="M12.584 13.0837L12.584 17.667"
        stroke={color}
        strokeWidth={color}
        stroke-miterlimit="10"
      />
    </svg>
  )
}
