import type { Meta, StoryObj } from '@storybook/react'
import InputSearch from './InputSearch'

const meta = {
  title: 'Components/InputSearch',
  component: InputSearch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Gray: Story = {
  args: {
    label: '기본(gray)',
    value: '',
    style: 'gray',
    size: 'md',
    className: '',
    inputClassName: '',
    onChange: () => {},
  },
}
export const White: Story = {
  args: {
    label: '흰색(white)',
    value: '',
    style: 'white',
    size: 'xlg',
    inputClassName: '',
    onChange: () => {},
  },
}
