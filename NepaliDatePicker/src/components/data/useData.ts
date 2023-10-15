import { useContext } from "react"

import { DataAction } from "#/Data.ts"

import { DataContext } from "./provider.tsx"

export const useData = () => {
  const { state, dispatch } = useContext(DataContext)
  const setData = (action: DataAction) => {
    dispatch(action)
  }

  return { setData, state }
}
