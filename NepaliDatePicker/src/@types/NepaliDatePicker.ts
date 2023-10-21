import { HTMLProps } from "react"

import { IData } from "#/Data.ts"

export interface NepaliDatePickerOptions {
  classNames?: Omit<IData["options"]["classNames"], "input">
  colors?: {
    primary?: IData["options"]["colors"]["primary"]
    secondary?: IData["options"]["colors"]["secondary"]
  }
  dateSeparator?: IData["options"]["dateSeparator"]
  locale?: "en" | "ne"
  valueLocale?: "en" | "ne"
  closeOnSelect?: IData["options"]["closeOnSelect"]
}

export interface INepaliDatePicker extends Omit<HTMLProps<HTMLInputElement>, "onChange" | "onSelect"> {
  dark?: boolean
  value?: string
  className?: IData["options"]["classNames"]["input"]
  onChange?: IData["events"]["onChange"]
  onSelect?: IData["events"]["onSelect"]
  options?: NepaliDatePickerOptions
}

export const INepaliDatePickerKeys = [
  "dark",
  "value",
  "className",
  "onChange",
  "onSelect",
  "options",
]
