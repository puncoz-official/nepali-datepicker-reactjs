import { useContext } from "react"

import { DataContext } from "@/components"
import { DataAction } from "#/Data.ts"


export const useData = () => {
  const { state, dispatch } = useContext(DataContext)

  const setData = (action: DataAction) => {
    dispatch(action)
  }

  return { setData, state }
}
