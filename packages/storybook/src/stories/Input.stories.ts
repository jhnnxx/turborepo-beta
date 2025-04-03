import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>
export const Text: Story = {
  args: {
    label: '기본(text)',
    value: '',
    style: 'text',
    onChange: () => {},
  },
}
export const Password: Story = {
  args: {
    label: '비밀번호(password)',
    value: '',
    style: 'password',
    type: 'password',
    pattern: 'password',
    required: true,
    validateOnChange: true,
    labelClassName: 'no-required mb-[13px] text-[20px]',
  },
}
export const Delete: Story = {
  args: {
    label: '삭제(delete)',
    value: '',
    style: 'delete',
    iconClick: () => {},
    onChange: () => {},
  },
}
export const Button: Story = {
  args: {
    width: '300px',
    label: '버튼(button)',
    value: '',
    style: 'button',
    buttonClick: () => {},
    onChange: () => {},
  },
}
