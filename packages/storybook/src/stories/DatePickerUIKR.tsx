import { getDate, getMonth, getYear } from 'date-fns'
import { ko } from 'date-fns/locale/ko'
import DatePicker, { DatePickerProps, registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
registerLocale('ko', ko)

export default function DatePickerUIKR(props: DatePickerProps) {
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ]
  return (
    <div
      className={`CalenderBox ${props.inline === undefined && 'relative flex h-11 w-full items-center border border-calendar-border'}`}
    >
      <DatePicker
        {...props}
        locale="ko"
        dateFormat="yyyy.MM.dd"
        showPopperArrow={false}
        calendarClassName="Calender"
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex h-[32px] items-center justify-center gap-3 lg:h-[44px]">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <GoChevronLeft size="24px" />
            </button>
            <p className="text-sm font-semibold text-neutral-900 lg:px-2 lg:text-xl">
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
