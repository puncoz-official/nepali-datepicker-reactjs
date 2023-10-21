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

  const handleOnClick = useCallback(() => {
    state.events.onChange(today.dateString)

    if (state.options.closeOnSelect) {
      setData({ type: Types.SET_CALENDAR_OPEN, isOpen: false })
    }
  }, [today, state.events.onChange, state.options.closeOnSelect])

  return (
    <ActionBtn className="ndp-font-medium ndp-border hover:ndp-text-primary ndp-group"
               title={trans("labels.today")}
               onClick={() => handleOnClick()}
               onKeyDown={() => handleOnClick()}>
      <TodayIcon date={numberTrans(zeroPad(today.bsDay))} />
      <span className="ndp-ml-2">
        {trans("labels.today")}
      </span>
    </ActionBtn>
  )
}

export default TodayBtn
