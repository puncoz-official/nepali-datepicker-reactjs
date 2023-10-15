import { HTMLProps } from "react"

import { IData, Language } from "#/Data.ts"

export interface NepaliDatePickerOptions {
  calendarLocale: Language
  valueLocale: Language
}

export interface INepaliDatePicker extends HTMLProps<HTMLInputElement> {
  value?: IData["value"]
  className?: IData["classNames"]["input"]
  wrapperClassName?: IData["classNames"]["wrapper"]
  dark?: boolean
  onChange?: () => void
  onSelect?: () => void
  options?: NepaliDatePickerOptions
}

export const INepaliDatePickerKeys = [
  "value",
  "className",
  "wrapperClassName",
  "dark",
  "onChange",
  "onSelect",
  "options",
]
