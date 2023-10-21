import { ADToBS } from "bikram-sambat-js"
import React, { FunctionComponent, useCallback, useMemo } from "react"

import { LeftArrow, NavBtn } from "@/components"
import { useData, useDateUtils, useTrans } from "@/hooks"
import { ParsedDate, Types } from "#/Data.ts"

const PreviousBtn: FunctionComponent = () => {
  const { trans } = useTrans()
  const { state, setData } = useData()
  const dateUtils = useDateUtils()

  const calendarDate = useMemo<ParsedDate>(() => {
    return state.date.calendar || dateUtils.parseBsDate(ADToBS(new Date()))
  }, [state.date.calendar])

  const handleOnClick = useCallback(() => {
    let year = calendarDate.bsYear
    let month = calendarDate.bsMonth - 1

    if (month === 0) {
      month = 12
      year--
    }

    if (year < state.calendarData.minBsYear || year > state.calendarData.maxBsYear) {
      return
    }

    const date = dateUtils.stitchDate({ year, month, day: 1 })

    setData({ type: Types.SET_CALENDAR_DATE, date: dateUtils.parseBsDate(date) })
  }, [calendarDate])

  return (
    <NavBtn title={trans("labels.previous")}
            onClick={() => handleOnClick()}
            onKeyDown={() => handleOnClick()}>
      <LeftArrow className="ndp-w-5 ndp-h-5" />
    </NavBtn>
  )
}

export default PreviousBtn
