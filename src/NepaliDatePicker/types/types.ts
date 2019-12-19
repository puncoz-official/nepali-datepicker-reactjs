export interface ParsedDate {
    bsYear: number
    bsMonth: number
    bsDay: number
    weekDay: number
    adDate: Date
    numberOfDaysInBSMonth: number
    firstAdDayInBSMonth: Date
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

export const parsedDateInitialValue: ParsedDate = {
    adDate: new Date(),
    bsDay: 0,
    bsMonth: 0,
    bsYear: 0,
    firstAdDayInBSMonth: new Date(),
    numberOfDaysInBSMonth: 0,
    weekDay: 0,
}

export type localeType = "ne" | "en"

export interface OptionType {
    label: string
    value: number
}

export interface DatepickerOptions {
    closeOnSelect: boolean
    calenderLocale: localeType
    valueLocale: localeType
}

export interface DatepickerEvents {
    change: (value: string) => void
    yearSelect?: (year: number) => void
    monthSelect?: ({ year, month }: YearMonth) => void
    daySelect?: ({ year, month, day }: YearMonthDate) => void
    previousMonthSelect?: ({ month, year }: YearMonth) => void
    nextMonthSelect?: ({ year, month }: YearMonth) => void
    todaySelect?: ({ year, month, day }: YearMonthDate) => void
}

export type voidFunction = () => void
