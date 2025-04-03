import type { Meta, StoryObj } from '@storybook/react'
import Select from './Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SizeLg: Story = {
  args: {
    label: '옵션 커스텀',
    size: 'lg',
    options: [
      { name: '옵션 1', id: 'option1' },
      { name: '옵션 2', id: 'option2' },
      { name: '옵션 3', id: 'option3' },
    ],
    labelField: 'name',
    valueField: 'id',
    onChange: () => {},
  },
}
export const SizeMd: Story = {
  args: {
    label: 'option 길면 최대노출갯수 설정',
    size: 'md',
    maxOption: 4,
    options: [
      { label: '옵션 1', value: 'option1' },
      { label: '옵션 2', value: 'option2' },
      { label: '옵션 3', value: 'option3' },
      { label: '옵션 4', value: 'option4' },
      { label: '옵션 5', value: 'option5' },
      { label: '옵션 6', value: 'option6' },
      { label: '옵션 7', value: 'option7' },
      { label: '옵션 8', value: 'option8' },
      { label: '옵션 9', value: 'option9' },
    ],
    required: true,
    onChange: () => {},
  },
}
export const SizeSm: Story = {
  args: {
    label: '사이즈 sm',
    size: 'sm',
    options: [
      { label: '옵션 1 옵션 1 옵션 1 옵션 1 옵션 1', value: 'option1' },
      { label: '옵션 2', value: 'option2' },
      { label: '옵션 3', value: 'option3' },
      { label: '옵션 4', value: 'option4' },
      { label: '옵션 5', value: 'option5' },
      { label: '옵션 6', value: 'option6' },
      { label: '옵션 7', value: 'option7' },
      { label: '옵션 8', value: 'option8' },
      { label: '옵션 9', value: 'option9' },
    ],
    onChange: () => {},
  },
}
