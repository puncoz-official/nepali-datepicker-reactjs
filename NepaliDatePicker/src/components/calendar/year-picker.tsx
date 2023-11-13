import { ADToBS } from "bikram-sambat-js"
import React, { FunctionComponent, useCallback, useMemo } from "react"

import { DropDown, Option } from "@/components/dropdown"
import { useCommon, useData, useDateUtils, useTrans } from "@/hooks"
import { ParsedDate, Types } from "#/Data.ts"

const YearPicker: FunctionComponent = () => {
  const { state, setData } = useData()
  const { numberTrans, trans } = useTrans()
  const { range } = useCommon()
  const dateUtils = useDateUtils()

  const calendarDate = useMemo<ParsedDate>(() => {
    return state.date.calendar ?? dateUtils.parseBsDate(ADToBS(new Date()))
  }, [state.date.calendar])

  const yearList = useMemo<Option[]>(() => {
    return range(state.calendarData.minBsYear, state.calendarData.maxBsYear)
      .reverse()
      .map((year) => ({
        label: numberTrans(year),
        value: year,
      }))
  }, [state.locale.calendar])

  const handleOnSelect = useCallback((year: number) => {
    const date = dateUtils.stitchDate({ year, month: calendarDate.bsMonth, day: 1 })
    setData({ type: Types.SET_CALENDAR_DATE, date: dateUtils.parseBsDate(date) })
  }, [calendarDate])

  return (
    <DropDown options={yearList}
              value={state.date.calendar?.bsYear ?? 0}
              onSelect={handleOnSelect}
              className={state.options.classNames.yearPicker ?? `
                ndp__year_picker ndp-border-y ndp-border-l ndp-rounded-l-sm
              `}
              dropdownClass={state.options.classNames.yearPickerDropDown ?? `
                ndp__year_picker-dropdown ndp-rounded-l-sm ndp-rounded-br-sm
              `}
              title={trans("labels.select-year")} />
  )
}

export default YearPicker
