import React, { FunctionComponent, HTMLProps } from "react"

import { useData } from "@/components"
import { omitKeys } from "@/utils"

interface Props extends HTMLProps<HTMLInputElement> {
}

const DateInput: FunctionComponent<Props> = (props) => {
  const inputProps = omitKeys(["type", "readOnly"], props)
  const { state } = useData()

  return (
    <input type="text"
           className={state.classNames.input || `
                ndp__input
                ndp-inline-block ndp-w-full ndp-py-2 ndp-px-3 ndp-rounded
                ndp-shadow-sm dark:ndp-shadow-slate-800
                ndp-transition-all ndp-ease-in
                ndp-border-0
                ndp-bg-white dark:ndp-bg-slate-700 ndp-bg-clip-padding
                ndp-text-sm ndp-leading-5 ndp-font-normal
                ndp-text-gray-700 dark:ndp-text-white/80
                ndp-outline-none
                ndp-ring-inset ndp-ring-1 ndp-ring-slate-300 dark:ndp-ring-transparent
                focus:ndp-ring-blue-500 dark:focus:ndp-ring-blue-500
             `}
           readOnly={true}
           value={state.value}
           {...inputProps} />
  )
}

export default DateInput
