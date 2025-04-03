import { IconColorProps } from '@/types/common/icons'

export default function IconArrowLeft({ color }: IconColorProps) {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8465 18.4245C16.0812 18.1906 16.0812 17.8114 15.8465 17.5775L9.84656 11.5988C9.61183 11.3649 9.23126 11.3649 8.99653 11.5988C8.7618 11.8327 8.7618 12.212 8.99653 12.4459L14.9964 18.4245C15.2312 18.6584 15.6117 18.6584 15.8465 18.4245Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8469 5.57683C15.6122 5.34293 15.2316 5.34293 14.9969 5.57683L8.99695 11.5555C8.76222 11.7894 8.76222 12.1686 8.99695 12.4025C9.23168 12.6364 9.61226 12.6364 9.84699 12.4025L15.8469 6.42385C16.0816 6.18995 16.0816 5.81073 15.8469 5.57683Z"
        fill={color}
      />
    </svg>
  )
}
