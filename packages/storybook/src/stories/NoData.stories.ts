import type { Meta, StoryObj } from '@storybook/react'
import NoData from './NoData'

const meta = {
  title: 'Components/NoData',
  component: NoData,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NoData>

export default meta
type Story = StoryObj<typeof meta>

export const noData: Story = {
  args: {},
}

export const noDataMessage: Story = {
  args: {
    message: '문의 내역이 없습니다.',
  },
}

export const noDataPayment: Story = {
  args: {
    isPayment: true,
  },
}
