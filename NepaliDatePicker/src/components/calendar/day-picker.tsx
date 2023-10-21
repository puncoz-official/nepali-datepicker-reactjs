import { ADToBS } from "bikram-sambat-js"
import React, { FunctionComponent, useCallback, useMemo } from "react"

import { useCommon, useData, useDateUtils, useTrans } from "@/hooks"
import { ParsedDate } from "#/Data.ts"

interface DayInfo {
  day: number
  month: number
  year: number
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
}

const DayPicker: FunctionComponent = () => {
  const { numberTrans } = useTrans()
  const { range } = useCommon()
  const { state } = useData()
  const dateUtils = useDateUtils()

  const calendarDate = useMemo<ParsedDate>(() => {
    return state.date.calendar || dateUtils.parseBsDate(ADToBS(new Date()))
  }, [state.date.calendar])

  const selectedDate = useMemo<ParsedDate | undefined>(() => {
    return state.date.selected
  }, [state.date.selected])

  const weeksInMonth = useMemo<number>(() => {
    return Math.ceil((calendarDate.firstAdDayInBsMonth.getDay() + calendarDate.numberOfDaysInBsMonth) / 7) - 1
  }, [calendarDate])

  const previousMonth = useMemo<number>(() => {
    return calendarDate.bsMonth - 1 === 0 ? 12 : calendarDate.bsMonth - 1
  }, [calendarDate])

  const previousYear = useMemo<number>(() => {
    return previousMonth === 12 ? calendarDate.bsYear - 1 : calendarDate.bsYear
  }, [previousMonth, calendarDate])

  const daysInPreviousMonth = useMemo<number>(() => {
    return previousYear >= state.calendarData.minBsYear
      ? dateUtils.getNumberOfDaysInBSMonth(previousYear, previousMonth)
      : 30
  }, [previousYear, previousMonth])

  const getDayInfo = useCallback((weekNum: number, weekDayNum: number): DayInfo => {
    let day = weekNum * 7 + weekDayNum - calendarDate.firstAdDayInBsMonth.getDay()
    const month = calendarDate.bsMonth
    const year = calendarDate.bsYear

    let isCurrentMonth = true
    if (day <= 0) {
      day = daysInPreviousMonth + day
      isCurrentMonth = false
    } else if (day > calendarDate.numberOfDaysInBsMonth) {
      day -= calendarDate.numberOfDaysInBsMonth
      isCurrentMonth = false
    }

    const today = dateUtils.splitDate(ADToBS(new Date()))
    const isToday = isCurrentMonth
      ? today.day === day && today.month === month && today.year === year
      : false

    const isSelected = isCurrentMonth
      ? selectedDate?.bsDay === day && selectedDate?.bsMonth === month && selectedDate?.bsYear === year
      : false

    return { day, month, year, isCurrentMonth, isToday, isSelected }
  }, [calendarDate, selectedDate, daysInPreviousMonth])

  const handleOnDaySelect = useCallback((dayInfo: DayInfo) => {
    if (!dayInfo.isCurrentMonth) {
      return
    }

    const date = dateUtils.stitchDate({
      year: dayInfo.year,
      month: dayInfo.month,
      day: dayInfo.day,
    })
    state.events.onSelect(date)
    state.events.onChange(date)
  }, [calendarDate])

  return (
    <tbody>
      {range(0, weeksInMonth).map((weekNum) => (
        <tr key={weekNum} className="ndp-border-0">
          {range(1, 7).map((weekDayNum) => {
            const dayInfo = getDayInfo(weekNum, weekDayNum)

            return (
              <td key={weekDayNum}
                  className={`ndp-border-0`}
                  title={numberTrans(dayInfo.day)}>
                <button className={`
                  ndp-rounded-full ndp-h-9 ndp-w-9
                  ndp-relative ndp-cursor-pointer hover-transition
                  ${dayInfo.isSelected ? `
                    ndp-bg-primary ndp-text-secondary
                    hover:ndp-opacity-80
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
                  `}

                  ${!dayInfo.isCurrentMonth && `
                    ndp-text-gray-200 dark:ndp-text-slate-700
                    hover:ndp-bg-transparent dark:hover:ndp-bg-transparent
                    ndp-cursor-not-allowed ndp-select-none
                  `}
                `}
                        onClick={() => handleOnDaySelect(dayInfo)}
                        onKeyDown={() => handleOnDaySelect(dayInfo)}>
                  {numberTrans(dayInfo.day)}

                  {dayInfo.isToday && (
                    <div className={`
                      ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                      ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                    `} />
                  )}
                </button>
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}

export default DayPicker
