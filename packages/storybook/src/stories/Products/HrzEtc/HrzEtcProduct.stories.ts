import type { Meta, StoryObj } from '@storybook/react'
import HrzEtcProduct from './HrzEtcProduct'

const meta = {
  title: 'Components/Products/HrzEtc',
  component: HrzEtcProduct,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HrzEtcProduct>

type Story = StoryObj<typeof meta>
export default meta

export const hrzEtcProduct: Story = {
  args: {
    className: 'lg:w-[18.75vw] lg:h-[6.25vw] w-[91.11vw] h-[33.33vw]',
    priceInfo: {
      retail_price: 60000,
      sell_price: 54000,
      discount_rate: 10,
    },
    productInfo: {
      option1: '옐로우 골드',
      option2: '14k',
      option3: '6호(513188)',
      stock: 1,
    },
    title:
      '14K/18K 귀걸이 E.G BELLA_E 007 상품명은 최대 2줄까지 노출됩니다 상품명은 최대 2줄까지 노출됩니다',
    imageBoxStyle:
      'lg:w-[6.25vw] w-[33.33vw] lg:min-w-[6.25vw] min-w-[33.33vw]',
    image: '/img/product_test_img.png',
    isLike: true,
  },
}
