import { HTMLProps } from "react"

import { ClassName } from "#/Common.ts"
import { Locale } from "#/Locale.ts"

export interface NepaliDatePickerOptions {
  calendarLocale: Locale
  valueLocale: Locale
}

export interface INepaliDatePicker extends HTMLProps<HTMLInputElement> {
  value?: string
  className?: ClassName
  wrapperClassName?: ClassName
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
