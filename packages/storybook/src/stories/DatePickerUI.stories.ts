import type { Meta, StoryObj } from '@storybook/react'
import DatePickerUI from './DatePickerUI'

const meta = {
  title: 'Components/DatePickerUI',
  component: DatePickerUI,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DatePickerUI>

export default meta
type Story = StoryObj<typeof meta>

export const multiDatePickerStart: Story = {
  args: {
    selected: new Date('2025/03/12'),
    selectsStart: true,
    startDate: new Date('2025/03/12'),
    endDate: new Date('2025/03/12'),
    maxDate: new Date('2025/04/12'),
    onChange: () => {},
  },
}

export const multiDatePickerEnd: Story = {
  args: {
    selected: new Date('2025/03/12'),
    selectsEnd: true,
    startDate: new Date('2025/03/12'),
    endDate: new Date('2025/04/12'),
    minDate: new Date('2025/03/12'),
    onChange: () => {},
  },
}

export const datePicker: Story = {
  args: {
    selected: new Date('2025/03/12'),
    selectsEnd: true,
    onChange: () => {},
  },
}

export const inlineDatePickerEnd: Story = {
  args: {
    selected: new Date('2025/03/12'),
    selectsEnd: true,
    inline: true,
    onChange: () => {},
  },
}
