import { HTMLAttributes } from "react"

export type voidFunction = () => void

export const ENGLISH = "en"
export const NEPALI = "ne"
export const BS = "BS"
export const AD = "AD"

export type localeType = "en" | "ne"

export interface NepaliDatePickerOptions {
    closeOnSelect: boolean
    calenderLocale: localeType
    valueLocale: localeType
}

export interface INepaliDatePicker {
    value: string
    className: HTMLAttributes<HTMLDivElement>["className"]
    inputClassName: HTMLAttributes<HTMLInputElement>["className"]
    onChange: (date: string) => void
    onSelect?: (value: string) => void
    options: NepaliDatePickerOptions
}

export interface NepaliDatePickerProps {
    value?: INepaliDatePicker["value"]
    className?: INepaliDatePicker["className"]
    inputClassName?: INepaliDatePicker["inputClassName"]
    onChange?: INepaliDatePicker["onChange"]
    onSelect?: INepaliDatePicker["onSelect"]
    options?: {
        closeOnSelect?: NepaliDatePickerOptions["closeOnSelect"]
        calenderLocale?: NepaliDatePickerOptions["calenderLocale"]
        valueLocale?: NepaliDatePickerOptions["valueLocale"]
    }
}

export interface NepaliDatepickerEvents {
    change: (value: string) => void
    yearSelect?: (year: number) => void
    monthSelect?: ({ year, month }: YearMonth) => void
    daySelect?: ({ year, month, day }: YearMonthDate) => void
    previousMonthSelect?: ({ month, year }: YearMonth) => void
    nextMonthSelect?: ({ year, month }: YearMonth) => void
    todaySelect?: ({ year, month, day }: YearMonthDate) => void
}

export interface ParsedDate {
    bsYear: number
    bsMonth: number
    bsDay: number
    weekDay: number
    adDate: Date
    numberOfDaysInBSMonth: number
    firstAdDayInBSMonth: Date
}

export const parsedDateInitialValue: ParsedDate = {
    adDate: new Date(),
    bsDay: 0,
    bsMonth: 0,
    bsYear: 0,
    firstAdDayInBSMonth: new Date(),
    numberOfDaysInBSMonth: 0,
    weekDay: 0,
}

export interface SplittedDate {
    year: number
    month: number
    day: number
}

export type YearMonthDate = SplittedDate

export interface YearMonth {
    year: number
    month: number
}
