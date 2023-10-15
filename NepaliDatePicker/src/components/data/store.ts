import { DataAction, IData, SET_DATA } from "#/Data.ts"

export const DataStore = (props?: IData) => ({
  ...props,
}) as IData

export const DataReducer = (state: IData = DataStore(), action: DataAction) => {
  if (action.type === SET_DATA) {
    return { ...state, [action.key]: action.value }
  }

  return state
}
