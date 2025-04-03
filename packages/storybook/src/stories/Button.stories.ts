import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    label: 'Button Text',
    type: 'button',
    fontSize: 'lg',
  },
}

export const Style1: Story = {
  args: {
    style: 'style1',
    label: 'Button Style1',
    type: 'button',
    size: 'sm',
    className: 'w-[200px]',
  },
}

export const Style2: Story = {
  args: {
    style: 'style2',
    label: 'Button Style2',
    type: 'button',
    size: 'sm',
    className: 'w-[200px]',
  },
}

export const Style3: Story = {
  args: {
    style: 'style3',
    label: 'Button Style3',
    type: 'button',
    size: 'sm',
    width: 'full',
  },
}
