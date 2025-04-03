import type { Meta, StoryObj } from '@storybook/react'
import LoadMore from './LoadMore'

const meta = {
  title: 'Components/LoadMore',
  component: LoadMore,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoadMore>

export default meta
type Story = StoryObj<typeof meta>

export const loadMore: Story = {
  args: { responseSize: 'lg' },
}

export const loadMoreCount: Story = {
  args: {
    isCount: true,
    total: 140,
    count: 40,
  },
}
