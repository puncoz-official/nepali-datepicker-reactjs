import "@/styles/normalize.css"
import "@/styles/tailwind.css"

import React, { FunctionComponent } from "react"

type Props = {
  className: ""
}

const NepaliDatePicker: FunctionComponent<Props> = () => {
  return (
    <div className="ndp__datepicker">
      <input type="date" />
    </div>
  )
}

export default NepaliDatePicker
