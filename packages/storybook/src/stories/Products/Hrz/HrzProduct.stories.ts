import type { Meta, StoryObj } from '@storybook/react'
import HrzProduct from './HrzProduct'

const meta = {
  title: 'Components/Products/Hrz',
  component: HrzProduct,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HrzProduct>

type Story = StoryObj<typeof meta>
export default meta

export const hrzProduct: Story = {
  args: {
    className: 'lg:h-[6.25vw] h-[27.78vw]',
    priceInfo: {
      retail_price: 60000,
      sell_price: 54000,
      discount_rate: 10,
    },
    title: '은 기적의 메달(특대)',
    imageBoxStyle: 'lg:w-[6.25vw] w-[27.78vw]',
    image: '/img/product_test_img.png',
    isLike: true,
  },
}
