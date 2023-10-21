import React, { FunctionComponent, useCallback } from "react"

import { ActionBtn, CrossIcon } from "@/components"
import { useData, useTrans } from "@/hooks"
import { Types } from "#/Data.ts"

const ClearBtn: FunctionComponent = () => {
  const { trans } = useTrans()
  const { state, setData } = useData()

  const handleOnClick = useCallback(() => {
    state.events.onChange("")

    if (state.options.closeOnSelect) {
      setData({ type: Types.SET_CALENDAR_OPEN, isOpen: false })
    }
  }, [state.events.onChange, state.options.closeOnSelect])

  if (!state.date.selected) {
    return null
  }

  return (
    <ActionBtn className={state.options.classNames.clearBtn || `
                ndp__clear_btn ndp-font-medium ndp-border hover:ndp-text-red-500
               `}
               title={trans("labels.clear")}
               onClick={() => handleOnClick()}
               onKeyDown={() => handleOnClick()}>
      <CrossIcon className={state.options.classNames.clearBtnIcon || `ndp__today_btn-icon ndp-w-4 ndp-h-4`} />
      <span className={state.options.classNames.clearBtnText || `ndp__today_btn-text ndp-ml-2`}>
        {trans("labels.clear")}
      </span>
    </ActionBtn>
  )
}

export default ClearBtn
