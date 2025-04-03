import type { Meta, StoryObj } from '@storybook/react'
import Product from './Product'

const meta = {
  title: 'Components/Products/Product',
  component: Product,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Product>

export default meta
type Story = StoryObj<typeof meta>

export const productNoPrice: Story = {
  args: {
    className: 'lg:w-[16.3vw] lg:h-[19.84vw] h-[61.66vw] w-[44.44vw]',
    title: '교부학 입문',
    bookInfo: {
      writer: '강신영',
      translator: '강신영',
    },
    fontSize: 'md',
    image: '/img/product_test_img.png',
    imageBoxStyle: 'h-[44.44vw] lg:h-[16.3vw]',
    textBoxStyle: 'lg:pt-[1.04vw] pt-[3.33vw]',
    isLike: true,
    textGap: 'sm',
  },
}

export const productCard: Story = {
  args: {
    className: 'lg:w-[5.2vw] lg:h-[10.05vw] h-[48.05vw] w-[24.44vw]',
    title: '준수성범 필사',
    bookInfo: {
      writer: '강신영',
      translator: '강신영',
    },
    fontSize: 'card',
    image: '/img/product_test_img.png',
    imageBoxStyle: 'h-[44.44vw] lg:h-[16.3vw]',
    textBoxStyle: 'lg:pt-[1.04vw] pt-[3.33vw]',
    textGap: 'card',
    isCard: true,
  },
}

export const productLarge1: Story = {
  args: {
    className: 'w-[91.11vw] h-[124.44vw] lg:w-[34vw] lg:h-[34vw]',
    priceInfo: {
      retail_price: 5000,
      sell_price: 4000,
      discount_rate: 20,
    },
    title: 'TEST',
    fontSize: 'lg',
    image: '/img/product_test_img.png',
    imageBoxStyle: 'h-[91.11vw] lg:h-[24.69vw]',
    textBoxStyle: 'lg:p-[2.1vw] p-[6.67vw]',
    textGap: 'lg',
    isBorder: 'all',
    isLike: true,
  },
}

export const productLarge2: Story = {
  args: {
    className: 'w-[91.11vw] h-[124.44vw] lg:w-[28.02vw] lg:h-[34.17vw]',
    priceInfo: {
      retail_price: 5000,
      sell_price: 4000,
      discount_rate: 20,
    },
    title: 'TEST',
    fontSize: 'lg',
    image: '/img/product_test_img.png',
    imageBoxStyle: 'h-[91.11vw] lg:h-[28.02vw]',
    textBoxStyle: 'lg:pt-[1.04vw] pt-[3.33vw]',
    textGap: 'lg',
    isLike: true,
    isBorder: 'img',
  },
}

export const totalLarge: Story = {
  args: {
    className: 'w-[91.11vw] h-[124.44vw] lg:w-[34.8vw] lg:h-[37.5vw]',
    priceInfo: {
      retail_price: 60000,
      sell_price: 54000,
      discount_rate: 10,
    },
    title: '은 기적의 메달(특대)',
    fontSize: 'lg',
    // image: '/img/product_test_img.png',
    imageBoxStyle: 'h-[91.11vw] lg:h-[28.23vw]',
    textBoxStyle: 'lg:p-[2.1vw] p-[6.67vw]',
    isBorder: 'img',
    isLike: true,
    textGap: 'lg',
  },
}

export const productMd1: Story = {
  args: {
    className: 'w-[66.67vw] h-[91.67vw] lg:w-[20.83vw] lg:h-[26.04vw]',
    priceInfo: {
      retail_price: 60000,
      sell_price: 54000,
      discount_rate: 10,
    },
    title: '은 기적의 메달(특대)',
    fontSize: 'md',
    image: '/img/product_test_img.png',
    imageBoxStyle: 'h-[66.67vw] lg:h-[20.83vw]',
    textBoxStyle: 'lg:pt-[1.04vw] pt-[3.33vw]',
    // isBorder: 'img',
    isLike: true,
    textGap: 'md',
  },
}

export const productMd2: Story = {
  args: {
    className: 'w-[55.55vw] h-[80.55vw] lg:w-[16.3vw] lg:h-[21.3vw]',
    priceInfo: {
      retail_price: 60000,
      sell_price: 54000,
      discount_rate: 10,
    },
    title: '은 기적의 메달(특대)',
    fontSize: 'md',
    image: '/img/product_test_img.png',
    imageBoxStyle: 'h-[55.55vw] lg:h-[16.3vw]',
    textBoxStyle: 'lg:pt-[1.04vw] pt-[3.33vw]',
    // isBorder: 'img',
    isLike: true,
    textGap: 'sm',
  },
}

export const productSm1: Story = {
  args: {
    className: 'w-[44.44vw] h-[71.67vw] lg:w-[11.49vw] lg:h-[17.4vw]',
    priceInfo: {
      retail_price: 60000,
      sell_price: 54000,
      discount_rate: 10,
    },
    title: '은 기적의 메달(특대)',
    fontSize: 'sm',
    image: '/img/product_test_img.png',
    imageBoxStyle: 'h-[44.44vw] lg:h-[11.45vw]',
    textBoxStyle: 'lg:pt-[0.83vw] pt-[3.33vw]',
    isLike: true,
    textGap: 'sm',
  },
}

export const productXs1: Story = {
  args: {
    className: 'w-[44.44vw] h-[66.11vw]',
    priceInfo: {
      retail_price: 60000,
      sell_price: 54000,
      discount_rate: 10,
    },
    title: '은 기적의 메달(특대)',
    fontSize: 'xs',
    image: '/img/product_test_img.png',
    imageBoxStyle: 'h-[44.44vw]',
    textBoxStyle: 'lg:pt-[0.83vw] pt-[3.33vw]',
    isLike: true,
    textGap: 'sm',
  },
}
