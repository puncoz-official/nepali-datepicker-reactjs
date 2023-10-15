import { ClassName } from "#/Common.ts"

export enum Theme {
  LIGHT = "light",
  DARK = "dark"
}

export enum Language {
  ENGLISH = "en",
  NEPALI = "ne"
}

export interface ClassNames {
  wrapper: ClassName
  input: ClassName
}

export interface Events {
  onChange?: () => void
  onSelect?: () => void
}

export interface Locale {
  calendar: Language
  value: Language
}


export interface IData {
  classNames: ClassNames
  theme: Theme
  value: string
  events: Events
  locale: Locale
}

export enum Types {
  SET_VALUE = "SET_VALUE",
  SET_CLASSES = "SET_CLASSES",
  SET_THEME = "SET_THEME",
  SET_EVENTS = "SET_EVENTS",
}

export type DataAction =
  | { type: Types.SET_VALUE, value: string }
  | { type: Types.SET_CLASSES, classNames: ClassNames }
  | { type: Types.SET_THEME, theme: Theme }
  | { type: Types.SET_EVENTS, events: Events }
