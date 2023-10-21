import { ClassName } from "#/Common.ts"

export enum Theme {
  LIGHT = "light",
  DARK = "dark"
}

export enum Language {
  ENGLISH = "en",
  NEPALI = "ne"
}

export enum DateType {
  BS = "bs",
  AD = "ad"
}

export interface ClassNames {
  wrapper: ClassName
  input: ClassName
}

export interface Events {
  onChange: (date: string) => void
  onSelect: (date: string) => void
}

export interface Locale {
  calendar: Language
  value: Language
}

export interface Options {
  colors: {
    primary: string
    secondary: string
  }
  dateSeparator: string
  currentLocale: Language
  valueLocale: Language
  closeOnSelect: boolean
}

export interface CalendarData {
  minBsYear: number
  maxBsYear: number
  bsMonthMaxDays: number[][]
  bsMonthCalculatedData: number[][]
}

export interface SplitDate {
  year: number
  month: number
  day: number
}

export interface ParsedDate {
  bsYear: number
  bsMonth: number
  bsDay: number
  weekDay: number
  adDate: Date
  numberOfDaysInBsMonth: number
  firstAdDayInBsMonth: Date
  dateString: string
}

export interface DateObject {
  calendar?: ParsedDate
  selected?: ParsedDate
}

export interface IData {
  classNames: ClassNames
  theme: Theme
  value: string
  events: Events
  isCalendarOpen: boolean
  locale: Locale
  options: Options
  calendarData: CalendarData
  date: DateObject
}

export enum Types {
  SET_CALENDAR_OPEN = "SET_CALENDAR_OPEN",
  SET_VALUE = "SET_VALUE",
  SET_CLASSES = "SET_CLASSES",
  SET_THEME = "SET_THEME",
  SET_EVENTS = "SET_EVENTS",
  SET_OPTIONS = "SET_OPTIONS",
  SET_CALENDAR_DATE = "SET_CALENDAR_DATE",
  SET_SELECTED_DATE = "SET_SELECTED_DATE",
}

export type DataAction =
  | { type: Types.SET_CALENDAR_OPEN, isOpen: boolean }
  | { type: Types.SET_VALUE, value: string }
  | { type: Types.SET_CLASSES, classNames: ClassNames }
  | { type: Types.SET_THEME, theme: Theme }
  | { type: Types.SET_EVENTS, events: Events }
  | { type: Types.SET_OPTIONS, options: Options }
  | { type: Types.SET_CALENDAR_DATE, date?: ParsedDate }
  | { type: Types.SET_SELECTED_DATE, date?: ParsedDate }
