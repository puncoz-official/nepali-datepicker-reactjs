import { ADToBS } from "bikram-sambat-js"
import React, { FunctionComponent, useCallback, useMemo } from "react"

import { DropDown, Option } from "@/components/dropdown"
import { useData, useDateUtils, useTrans } from "@/hooks"
import { ParsedDate, Types } from "#/Data.ts"
import { Months } from "#/Translations.ts"

const MonthPicker: FunctionComponent = () => {
  const { trans } = useTrans()
  const { state, setData } = useData()
  const dateUtils = useDateUtils()

  const calendarDate = useMemo<ParsedDate>(() => {
    return state.date.calendar ?? dateUtils.parseBsDate(ADToBS(new Date()))
  }, [state.date.calendar])

  const monthList = useMemo<Option[]>(() => {
    return Months.map((month, index) => ({
      label: trans(`months.${month}`),
      value: index,
    }))
  }, [state.locale.calendar])

  const handleOnSelect = useCallback((month: number) => {
    const date = dateUtils.stitchDate({
      year: calendarDate.bsYear,
      month: month + 1,
      day: 1,
    })
    setData({ type: Types.SET_CALENDAR_DATE, date: dateUtils.parseBsDate(date) })
  }, [calendarDate])

  return (
    <DropDown options={monthList}
              value={(state.date.calendar?.bsMonth ?? 1) - 1}
              onSelect={handleOnSelect}
              className={state.options.classNames.monthPicker ?? `
                ndp__month_picker ndp-border ndp-rounded-r-sm ndp-w-20 ndp-justify-center
              `}
              dropdownClass={state.options.classNames.monthPickerDropDown ?? `
                ndp__month_picker-dropdown ndp-rounded-r-sm ndp-rounded-bl-sm
              `}
              title={trans("labels.select-month")} />
  )
}

export default MonthPicker
