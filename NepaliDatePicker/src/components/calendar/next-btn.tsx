import React, { FunctionComponent } from "react"

import { NavBtn, RightArrow } from "@/components"
import { useTrans } from "@/hooks"

const NextBtn: FunctionComponent = () => {
  const { trans } = useTrans()

  return (
    <NavBtn title={trans("labels.next")}>
      <RightArrow className="ndp-w-5 ndp-h-5" />
    </NavBtn>
  )
}

export default NextBtn
