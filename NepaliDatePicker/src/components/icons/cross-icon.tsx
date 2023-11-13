import React, { FunctionComponent } from "react"

import { ClassName } from "#/Common.ts"

interface Props {
  className?: ClassName
}
const CrossIcon: FunctionComponent<Props> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth="1.5"
       stroke="currentColor"
       className={className ?? ""}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>

)

export default CrossIcon
