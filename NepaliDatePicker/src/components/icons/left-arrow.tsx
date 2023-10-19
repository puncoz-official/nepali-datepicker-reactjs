import React, { FunctionComponent } from "react"

import { ClassName } from "#/Common.ts"

type Props = {
  className?: ClassName
}
const LeftArrow: FunctionComponent<Props> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth="1.5"
       stroke="currentColor"
       className={className || ""}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
)

export default LeftArrow
