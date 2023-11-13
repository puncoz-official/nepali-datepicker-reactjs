import { DataAction, DayInfo, IData, Language, Theme, Types } from "#/Data.ts"

import { bsMonthCalculatedData, bsMonthMaxDays } from "./calendar-data"

export const DataState: IData = {
  isCalendarOpen: false,
  events: {
    onChange: (date: string) => date,
    onSelect: (dayInfo: DayInfo) => dayInfo,
  },
  locale: {
    calendar: Language.NEPALI,
    value: Language.ENGLISH,
  },
  options: {
    theme: Theme.LIGHT,
    classNames: {},
    colors: {
      primary: "#2096f5",
      secondary: "#fff",
    },
    dateSeparator: "-",
    closeOnSelect: true,
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
  switch (action.type) {
    case Types.SET_CALENDAR_OPEN:
      return { ...state, isCalendarOpen: action.isOpen }

    case Types.SET_CLASSES:
      return {
        ...state,
        options: { ...state.options, classNames: { ...state.options.classNames, ...action.classNames } },
      }

    case Types.SET_THEME:
      return { ...state, options: { ...state.options, theme: action.theme } }

    case Types.SET_EVENTS:
      return { ...state, events: action.events }

    case Types.SET_LOCALE:
      return { ...state, locale: { ...state.locale, ...action.locale } }

    case Types.SET_COLORS:
      return { ...state, options: { ...state.options, colors: { ...state.options.colors, ...action.colors } } }

    case Types.SET_SEPARATOR:
      return { ...state, options: { ...state.options, dateSeparator: action.separator } }

    case Types.SET_CLOSE_ON_SELECT:
      return { ...state, options: { ...state.options, closeOnSelect: action.closeOnSelect } }

    case Types.SET_OPTIONS:
      return { ...state, options: action.options }

    case Types.SET_CALENDAR_DATE:
      return { ...state, date: { ...state.date, calendar: action.date } }

    case Types.SET_SELECTED_DATE:
      return { ...state, date: { ...state.date, selected: action.date } }

    default:
      return state
  }
}
