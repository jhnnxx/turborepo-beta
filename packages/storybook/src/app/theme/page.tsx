'use client'
import { InputSelector } from '@/stories/InputSelector'
import { useForm } from 'react-hook-form'

import Button from '@/stories/Button'
import DatePickerUI from '@/stories/DatePickerUI'
import Icon, { HoverIcon } from '@/stories/Icon'
import Input, { InputHandle } from '@/stories/Input'
import LoadingSpinner from '@/stories/LoadingSpinner'
import LoadMore from '@/stories/LoadMore'
import NoData from '@/stories/NoData'
import Select, { SelectHandle } from '@/stories/Select'
import { Toggle } from '@/stories/Toggle'
import React, { useEffect, useRef, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { GoMoveToBottom } from 'react-icons/go'

interface TestFormData {
  checkbox1: boolean
  checkbox2: boolean
  checkbox3: boolean
  checkbox4: boolean
  radio: '11' | '22' | '33'
  textInput: string
  password: string
  select: string
}

export default function ThemeHomePage() {
  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
  } = useForm<TestFormData>({
    mode: 'onBlur',
  })
  const [loading, setLoading] = useState(true)
  const [startDate, setStartDate] = useState<Date | null>(
    new Date('2025/03/10'),
  )
  const [endDate, setEndDate] = useState<Date | null>(new Date('2025/04/20'))
  const [newDate, setNewDate] = useState<Date | null>(new Date('2025/03/15'))
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const submit = (data: TestFormData) => {
    console.log(data)
  }
  const inputRef = useRef<InputHandle>(null)
  const [inputVal, setInputVal] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (inputVal !== newValue) {
      setInputVal(newValue)
    }
  }
  const selectRef = useRef<SelectHandle>(null)

  const selectValid = () => {
    if (selectRef.current?.validate()) {
      const value = selectRef.current?.getValue()
      console.log('선택된 값:', value)
    }
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (
    <>
      {/* <button className="border-primary bg-primary text-primary p-[10px]">
        Button
      </button> */}
      <section className="flex flex-col gap-5">
        <p className="text-primary">text test</p>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <Input
              label="ref로 유효성 검사"
              width="200px"
              className="mb-2"
              required
              validateOnChange
              error={'필수 입력'}
            />
            <Button
              type="button"
              label="유효성 검사"
              style="style1"
              size="xs"
              onClick={() => {
                const isValid = inputRef.current?.validate()

                if (!isValid) {
                  console.warn('유효성 검사 실패')
                  return
                }
                const value = inputRef.current?.getValue()
                console.log('입력값:', value)
              }}
            />
          </div>

          <Input
            label="버튼(button)"
            style="button"
            width="auto"
            buttonClassName="w-[100px]"
            buttonClick={() => console.log('버튼클릭')}
            placeholder={'placeholder 입력'}
          />
          <Input
            label="삭제(delete)"
            style="delete"
            width="200px"
            value={inputVal}
            iconClick={() => setInputVal('')}
            onChange={handleInputChange}
            placeholder={'버튼 클릭하면 삭제'}
          />
          <Input label="전화번호" width="200px" pattern="tel" />
          <Input label="핸드폰 번호" width="200px" pattern="phone" required />
          <Input
            label="비밀번호(password) 라벨 커스텀"
            width="30%"
            inputClassName="w-1/2"
            style="password"
            type="password"
            pattern="password"
            labelClassName="no-required mb-[13px] text-[20px]"
            required
          />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <Select
              ref={selectRef}
              required
              label="required 테스트(옵션 커스텀)"
              className="mb-2"
              options={[
                { id: 'A', name: 'a' },
                { id: 'B', name: 'b' },
              ]}
              labelField="name"
              valueField="id"
            />
            <Button
              type="button"
              label="확인"
              style="style1"
              size="xs"
              onClick={selectValid}
            />
          </div>
          <div className="flex flex-col">
            <Select
              label="사이즈 md(option최대노출갯수 설정)"
              onChange={(value) => setSelectedOption(value)}
              maxOption={4}
              options={[
                {
                  label: '옵션 1',
                  value: 'option1',
                },
                {
                  label: '옵션 2',
                  value: 'option2',
                },
                {
                  label: '옵션 3',
                  value: 'option3',
                },
                {
                  label: '옵션 4',
                  value: 'option4',
                },
                {
                  label: '옵션 5',
                  value: 'option5',
                },
                {
                  label: '옵션 6',
                  value: 'option6',
                },
                {
                  label: '옵션 7',
                  value: 'option7',
                },
                {
                  label: '옵션 8',
                  value: 'option8',
                },
                {
                  label: '옵션 9',
                  value: 'option9',
                },
              ]}
              size="md"
            />
            <p>Select value: {selectedOption}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button type="button" label="버튼 스타일1" style="style1" size="xs" />
          <Button type="button" label="버튼 스타일2" style="style2" size="lg" />
          <Button type="button" label="버튼 스타일3" style="style3" size="md" />
          <Button
            type="button"
            disabled
            label="버튼 스타일1 disabled"
            style="style1"
            className="w-[200px]"
          />
        </div>
        <div className="flex gap-3">
          <GoMoveToBottom size="40px" className="p-2" />
          <BiMinus
            size="32px"
            className="border border-icon-gray-300 p-2 text-icon-gray-300"
          />
          <BiPlus
            size="32px"
            className="border border-icon-gray-300 p-2 text-icon-gray-300"
          />
          <BiMinus size="32px" className="border border-icon-gray-300 p-2" />
          <BiPlus
            size="32px"
            className="cursor-pointer border border-icon-gray-300 p-2"
            onClick={() => alert('더하기')}
          />
        </div>
        <div className="flex gap-3">
          <HoverIcon name="arrowTop" size="xl" />
          <Icon name="bell" size="xl" />
        </div>
        <div className="flex gap-3">
          <Icon name="login" />
          <Icon name="apple" />
          <Icon name="bell" color="primary" />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className={`flex h-auto w-fit flex-col border p-2`}>
            <button type={'submit'} className={`mx-auto mb-2 h-10 w-40 border`}>
              submit test
            </button>
            <div className={`grid grid-cols-4 gap-3`}>
              <InputSelector
                {...register('checkbox1')}
                label={'기본'}
                // size={'sm'}
                // disabled
              />
              <InputSelector
                {...register('checkbox2')}
                label={'원형'}
                type={`circle`}
                disabled
              />
              <InputSelector {...register('checkbox3')} />
              {/*<InputSelector*/}
              {/*  {...register('checkbox4')}*/}
              {/*  label={'색상 크기 고정'}*/}
              {/*  type={`circle`}*/}
              {/*  size={'lg'}*/}
              {/*  color={'#111111'}*/}
              {/*/>*/}
              <InputSelector
                type={'radio'}
                value={'11'}
                label={'11'}
                defaultChecked
                {...register('radio')}
              />
              <InputSelector
                type={'radio'}
                value={'22'}
                label={'22'}
                // disabled
                {...register('radio')}
              />
              <InputSelector
                type={'radio'}
                value={'33'}
                label={'33'}
                // disabled
                {...register('radio')}
              />
              <Toggle {...register('checkbox4')} />
            </div>

            <Input
              label="기본(text)"
              className="mt-[20px]"
              register={register('textInput', {
                required: '정보를 입력해주세요',
              })}
              error={errors.textInput?.message}
            />
            <Select
              label="사이즈 sm"
              register={register('select', {
                required: '선택 해주세요',
              })}
              error={errors.select?.message}
              options={[
                {
                  label: '옵션 1 옵션 1 옵션 1 옵션 1 옵션 1',
                  value: 'option1',
                },
                {
                  label: '옵션 2',
                  value: 'option2',
                },
                {
                  label: '옵션 3',
                  value: 'option3',
                },
                {
                  label: '옵션 4',
                  value: 'option4',
                },
                {
                  label: '옵션 5',
                  value: 'option5',
                },
                {
                  label: '옵션 6',
                  value: 'option6',
                },
                {
                  label: '옵션 7',
                  value: 'option7',
                },
                {
                  label: '옵션 8',
                  value: 'option8',
                },
                {
                  label: '옵션 9',
                  value: 'option9',
                },
              ]}
              size="sm"
            />
          </div>
        </form>
        <div className="flex flex-wrap gap-5">
          <div className="flex w-full gap-5">
            <DatePickerUI
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate as Date}
              endDate={endDate as Date}
              maxDate={endDate as Date}
            />
            <DatePickerUI
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate as Date}
              endDate={endDate as Date}
              minDate={startDate as Date}
            />
          </div>
          <DatePickerUI
            selected={newDate}
            onChange={(date) => setNewDate(date)}
            selectsEnd
          />
          <DatePickerUI
            selected={newDate}
            onChange={(date) => setNewDate(date)}
            selectsEnd
            inline
          />
        </div>
        <LoadMore responseSize="lg" />
        <LoadMore isCount count={40} total={200} />
        <NoData />
        <NoData message="문의 내역이 없습니다." />
        <NoData isPayment />
        {loading && <LoadingSpinner />}
      </section>
    </>
  )
}
