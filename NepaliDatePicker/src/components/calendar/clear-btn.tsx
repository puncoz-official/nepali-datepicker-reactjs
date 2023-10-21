import React, { FunctionComponent, useCallback } from "react"

import { ActionBtn, CrossIcon } from "@/components"
import { useData, useTrans } from "@/hooks"

const ClearBtn: FunctionComponent = () => {
  const { trans } = useTrans()
  const { state } = useData()

  const handleOnClick = useCallback(() => {
    state.events.onChange("")
  }, [state.events.onChange])

  if (!state.date.selected) {
    return null
  }

  return (
    <ActionBtn className="ndp-font-medium ndp-border hover:ndp-text-red-500"
               title={trans("labels.clear")}
               onClick={() => handleOnClick()}
               onKeyDown={() => handleOnClick()}>
      <CrossIcon className="ndp-w-4 ndp-h-4" />
      <span className="ndp-ml-2">
        {trans("labels.clear")}
      </span>
    </ActionBtn>
  )
}

export default ClearBtn
