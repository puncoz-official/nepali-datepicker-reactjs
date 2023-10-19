import React, { FunctionComponent } from "react"

import { LeftArrow, NavBtn, useTrans } from "@/components"

const PreviousBtn: FunctionComponent = () => {
  const { trans } = useTrans()

  return (
    <NavBtn title={trans("labels.previous")}>
      <LeftArrow className="ndp-w-5 ndp-h-5" />
    </NavBtn>
  )
}

export default PreviousBtn