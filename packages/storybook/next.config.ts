import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'], // SVG 파일에 대해 SVGR 로더를 사용
      },
    },
  },
}

export default nextConfig
