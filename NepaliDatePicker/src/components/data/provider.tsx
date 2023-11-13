import React, { createContext, Dispatch, FunctionComponent, ReactNode, useReducer } from "react"

import { DataReducer, DataState } from "@/components/data/reducer.ts"
import { DataAction, IData } from "#/Data.ts"

export const DataContext = createContext<{
  state: IData
  dispatch: Dispatch<DataAction>
}>({
  state: DataState,
  dispatch: () => null,
})

interface Props {
  children: ReactNode
}

export const DataProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, DataState)

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
