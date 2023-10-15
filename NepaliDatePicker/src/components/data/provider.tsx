import React, { createContext, FunctionComponent, ReactNode, useReducer } from "react"

import { DataAction, IData } from "#/Data.ts"
import { INepaliDatePicker } from "#/NepaliDatePicker.ts"

import { DataReducer, DataStore } from "./store.ts"

interface Context {
  dispatch: (action: DataAction) => void
  state: IData
}

export const DataContext = createContext<Context>({
  dispatch: () => null,
  state: DataStore(),
})

interface Props extends INepaliDatePicker {
  children: ReactNode
}

export const DataProvider: FunctionComponent<Props> = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(
    DataReducer,
    DataStore({
      classNames: {
        wrapper: props.wrapperClassName,
        input: props.className,
      },
      theme: props.dark ? "dark" : "light",
      value: props.value || "",
      onChange: props.onChange,
      onSelect: props.onSelect,
      locale: {
        calendar: "ne",
        value: "ne",
      },
    }),
  )

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
