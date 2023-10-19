import React, { FunctionComponent } from "react"

import { NavBtn, RightArrow, useTrans } from "@/components"

const NextBtn: FunctionComponent = () => {
  const { trans } = useTrans()

  return (
    <NavBtn title={trans("labels.next")}>
      <RightArrow className="ndp-w-5 ndp-h-5" />
    </NavBtn>
  )
}

export default NextBtn
