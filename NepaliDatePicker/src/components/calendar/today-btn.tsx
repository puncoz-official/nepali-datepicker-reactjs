import { ADToBS } from "bikram-sambat-js"
import React, { FunctionComponent, useCallback, useMemo } from "react"

import { ActionBtn, TodayIcon } from "@/components"
import { useCommon, useData, useDateUtils, useTrans } from "@/hooks"
import { Types } from "#/Data.ts"

const TodayBtn: FunctionComponent = () => {
  const { trans, numberTrans } = useTrans()
  const dateUtils = useDateUtils()
  const { zeroPad } = useCommon()
  const { state, setData } = useData()

  const today = useMemo(() => dateUtils.parseBsDate(ADToBS(new Date())), [])
  const todayInfo = useMemo(() => ({
    day: today.bsDay,
    month: today.bsMonth,
    year: today.bsYear,
    isToday: true,
    isCurrentMonth: true,
    isSelected: true,
    dateString: today.dateString,
    weekDay: today.weekDay,
  }), [today])

  const handleOnClick = useCallback(() => {
    if (state.modifiers.isDisabled(todayInfo)) {
      return
    }

    state.events.onSelect(todayInfo)
    state.events.onChange(numberTrans(today.dateString, state.locale.value))

    if (state.options.closeOnSelect) {
      setData({ type: Types.SET_CALENDAR_OPEN, isOpen: false })
    }
  }, [today, todayInfo, state.events.onSelect, state.events.onChange, state.modifiers.isDisabled, state.options.closeOnSelect, state.locale.value])

  return (
    <ActionBtn className={state.options.classNames.todayBtn ?? `
                ndp__today_btn ndp-font-medium ndp-border hover:ndp-text-primary ndp-group
              `}
               isDisabled={state.modifiers.isDisabled(todayInfo)}
               title={trans("labels.today")}
               onClick={handleOnClick}
               onKeyDown={handleOnClick}>
      <TodayIcon date={numberTrans(zeroPad(today.bsDay))} />
      <span className={state.options.classNames.todayBtnText ?? `ndp__today_btn-text ndp-ml-2`}>
        {trans("labels.today")}
      </span>
    </ActionBtn>
  )
}

export default TodayBtn
