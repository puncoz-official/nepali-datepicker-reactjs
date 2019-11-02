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
