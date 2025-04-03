import { IconColorProps } from '@/types/common/icons'

export default function IconHeartFill({ color }: IconColorProps) {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="icon=Heart-icon, state=Active, color=Green, size=32px"
        clipPath="url(#clip0_3157_105373)"
      >
        <path
          id="Vector"
          d="M29.3301 12.1092C29.3301 8.52902 27.0269 5.33398 22.8392 5.33398C20.187 5.33398 17.5141 7.16674 15.9993 8.67895C14.4871 7.16674 11.8117 5.33398 9.15949 5.33398C4.9744 5.33398 2.66602 8.52644 2.66602 12.1092C2.66602 14.3013 3.5294 16.6433 5.35698 18.4864C7.82822 20.9835 15.7383 28.9426 16.0019 29.1494C16.263 28.9426 24.1731 20.986 26.6469 18.4864C28.4693 16.6459 29.3327 14.3039 29.3327 12.1092H29.3301Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3157_105373">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
