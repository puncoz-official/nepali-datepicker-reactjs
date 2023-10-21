import { DataAction, IData, Language, Theme, Types } from "#/Data.ts"

import { bsMonthCalculatedData, bsMonthMaxDays } from "./calendar-data"

export const DataState: IData = {
  classNames: {
    wrapper: "",
    input: "",
  },
  theme: Theme.LIGHT,
  value: "",
  events: {
    onChange: (date: string) => date,
    onSelect: (date: string) => date,
  },
  locale: {
    calendar: Language.NEPALI,
    value: Language.NEPALI,
  },
  options: {
    colors: {
      primary: "#2096f5",
      secondary: "#fff",
    },
    dateSeparator: "-",
    currentLocale: Language.NEPALI,
    valueLocale: Language.ENGLISH,
  },
  calendarData: {
    minBsYear: 1970,
    maxBsYear: 2099,
    bsMonthMaxDays,
    bsMonthCalculatedData,
  },
  date: {
    calendar: undefined,
    selected: undefined,
  },
}

export const DataReducer = (state: IData = DataState, action: DataAction) => {
  if (action.type === Types.SET_VALUE) {
    return { ...state, value: action.value }
  }

  if (action.type === Types.SET_CLASSES) {
    return { ...state, classNames: action.classNames }
  }

  if (action.type === Types.SET_THEME) {
    return { ...state, theme: action.theme }
  }

  if (action.type === Types.SET_EVENTS) {
    return { ...state, events: action.events }
  }

  if (action.type === Types.SET_OPTIONS) {
    return { ...state, options: action.options }
  }

  if (action.type === Types.SET_CALENDAR_DATE) {
    return { ...state, date: { ...state.date, calendar: action.date } }
  }

  if (action.type === Types.SET_SELECTED_DATE) {
    return { ...state, date: { ...state.date, selected: action.date } }
  }

  return state
}
