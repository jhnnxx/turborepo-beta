import type { Config } from 'tailwindcss'
// import borderRadius from './src/token/tailwind/borderRadius.tailwind'
import colors from './src/token/tailwind/colors.tailwind'
import screens from './src/token/tailwind/screens.tailwind'
import shadow from './src/token/tailwind/shadow.tailwind'
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Storybook 포함
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}', // Storybook 포함
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          to: {
            opacity: '0.3',
            transform: 'translate3d(0, -1rem, 0)',
          },
        },
      },
      animation: {
        loading: '0.9s loading infinite alternate',
        loading2: '0.9s loading infinite alternate 0.3s',
        loading3: '0.9s loading infinite alternate 0.5s',
      },
      fontFamily: {
        sans: ['pretendard'],
      },
      // borderRadius,
      screens,
      colors,
      shadow,
    },
  },
  plugins: [],
} satisfies Config
