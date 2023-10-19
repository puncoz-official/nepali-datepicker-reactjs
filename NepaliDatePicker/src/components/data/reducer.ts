import { DataAction, IData, Language, Theme, Types } from "#/Data.ts"

export const DataState: IData = {
  classNames: {
    wrapper: "",
    input: "",
  },
  theme: Theme.LIGHT,
  value: "",
  events: {
    onChange: undefined,
    onSelect: undefined,
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
  },
  config: {
    maxYear: 2100,
    minYear: 1970,
    currentLocale: Language.NEPALI
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

  return state
}
