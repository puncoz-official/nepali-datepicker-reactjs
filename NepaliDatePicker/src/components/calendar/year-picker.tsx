import React, { FunctionComponent, useCallback, useMemo } from "react"

import { DropDown, Option } from "@/components/dropdown"
import { useCommon, useData, useTrans } from "@/hooks"

const YearPicker: FunctionComponent = () => {
  const { state } = useData()
  const { numberTrans, trans } = useTrans()
  const { range } = useCommon()

  const yearList = useMemo<Option[]>(() => {
    return range(state.calendarData.minBsYear, state.calendarData.maxBsYear)
      .reverse()
      .map((year) => ({
        label: numberTrans(year),
        value: year,
      }))
  }, [])

  const handleOnSelect = useCallback((year: Option) => {
    console.log(year)
  }, [])

  return (
    <DropDown options={yearList}
              value={state.date.calendar?.bsYear || 0}
              onSelect={handleOnSelect}
              className="ndp-border-y ndp-border-l ndp-rounded-l-sm"
              dropdownClass="ndp-rounded-l-sm ndp-rounded-br-sm"
              title={trans("labels.select-year")} />
  )
}

export default YearPicker
