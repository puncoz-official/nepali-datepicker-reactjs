import React, { FunctionComponent } from "react"

import { useCommon, useData, useTrans } from "@/hooks"
import { DatePickerInput, INepaliDatePickerKeys } from "#/NepaliDatePicker.ts"

type Props = DatePickerInput

const DateInput: FunctionComponent<Props> = (props) => {
  const { state } = useData()
  const { numberTrans } = useTrans()
  const { omitKeys } = useCommon()

  const inputProps = omitKeys([...INepaliDatePickerKeys, "type", "readOnly"], props)

  return (
    <input type="text"
           className={state.options.classNames.input ?? `
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
           value={numberTrans(state.date.selected?.dateString ?? "")}
           {...inputProps} />
  )
}

export default DateInput
