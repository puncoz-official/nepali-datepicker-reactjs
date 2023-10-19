import React, { FunctionComponent } from "react"

import { ActionBtn, CrossIcon, useTrans } from "@/components"

const ClearBtn: FunctionComponent = () => {
  const { trans } = useTrans()

  return (
    <ActionBtn className="ndp-font-medium ndp-border hover:ndp-text-red-500" title={trans("labels.clear")}>
      <CrossIcon className="ndp-w-4 ndp-h-4" />
      <span className="ndp-ml-2">
        {trans("labels.clear")}
      </span>
    </ActionBtn>
  )
}

export default ClearBtn
