import React, { FunctionComponent } from "react"

import { ActionBtn, TodayIcon, useTrans } from "@/components"

const TodayBtn: FunctionComponent = () => {
  const { trans, numberTrans } = useTrans()

  return (
    <ActionBtn className="ndp-font-medium ndp-border hover:ndp-text-primary ndp-group" title={trans("labels.today")}>
      <TodayIcon date={numberTrans(20)} />
      <span className="ndp-ml-2">
        {trans("labels.today")}
      </span>
    </ActionBtn>
  )
}

export default TodayBtn
