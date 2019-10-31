export interface ParsedDate {
    bsYear: number
    bsMonth: number
    bsDay: number
    weekDay: number
    adDate: Date
    numberOfDaysInBSMonth: number
    firstAdDayInBSMonth: Date
}

export type localeType = "ne" | "en"

export interface OptionType {
    label: string
    value: number
}
