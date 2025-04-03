import { getDate, getMonth, getYear } from 'date-fns'
import DatePicker, { DatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

export default function DatePickerUI(props: DatePickerProps) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return (
    <div
      className={`CalenderBox ${props.inline === undefined && 'relative flex h-11 w-full items-center border border-calendar-border'}`}
    >
      <DatePicker
        {...props}
        dateFormat="yyyy-MM-dd"
        showPopperArrow={false}
        calendarClassName="Calender"
        formatWeekDay={(day) => day.slice(0, 1)}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex h-[48px] items-center justify-center gap-3">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <GoChevronLeft size="24px" />
            </button>
            <p className="text-lg font-semibold text-calendar-title">
              <span>{months[getMonth(date)]}</span> <span>{getYear(date)}</span>
            </p>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <GoChevronRight size="24px" />
            </button>
          </div>
        )}
        renderDayContents={(day, date) => <span>{getDate(date)}</span>}
      />
    </div>
  )
}
