import { InputSelector } from '@/stories/InputSelector'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/InputSelector',
  component: InputSelector,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Square: Story = {
  args: {
    label: 'InputSelector Style1',
    type: 'square',
  },
}

export const Circle: Story = {
  args: {
    label: 'InputSelector Style2',
    type: 'circle',
  },
}

export const Radio: Story = {
  args: {
    label: 'InputSelector Style3',
    type: 'radio',
  },
}
