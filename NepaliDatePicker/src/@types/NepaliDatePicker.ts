import { HTMLProps } from "react"

import { IData } from "#/Data.ts"

export interface NepaliDatePickerOptions {
  colors?: {
    primary?: IData["options"]["colors"]["primary"]
    secondary?: IData["options"]["colors"]["secondary"]
  }
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
