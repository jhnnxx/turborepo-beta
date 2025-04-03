import { Toggle } from '@/stories/Toggle'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Toggle Default',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Toggle Default',
    disabled: true,
  },
}
