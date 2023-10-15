import { useContext } from "react"

import { DataTypes, IData, SET_DATA } from "#/Data.ts"

import { DataContext } from "./provider.tsx"

export const useData = () => {
  const { state, dispatch } = useContext(DataContext)
  const setData = (key: keyof IData, value: DataTypes) => {
    dispatch({
      key,
      type: SET_DATA,
      value,
    })
  }

  return { setData, state }
}
