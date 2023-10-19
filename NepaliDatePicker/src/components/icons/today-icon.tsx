import React, { FunctionComponent } from "react"

import { ClassName } from "#/Common.ts"

type Props = {
  date: string
  className?: ClassName
}
const TodayIcon: FunctionComponent<Props> = ({ date, className }) => {
  return (
    <span className={`
      ndp-border ndp-border-gray-200 dark:ndp-border-slate-700
      ndp-px-1 ndp-py-0.5 ndp-text-xs
      ndp-text-gray-400 ndp-inset-2 ndp-rounded-full
      group-hover:ndp-text-primary group-hover:ndp-border-primary group-hover:ndp-opacity-50
      ${className || ""}
    `}>
      {date}
    </span>
  )
}

export default TodayIcon
