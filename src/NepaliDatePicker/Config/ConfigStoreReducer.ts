import { NEPALI } from "../Types"
import { ConfigAction, ConfigState, SET_CONFIG } from "./ConfigTypes"

export const initialState: ConfigState = {
    currentLocale: NEPALI,
}

const ConfigReducer = (state: ConfigState = initialState, action: ConfigAction): ConfigState => {
    if (action.type === SET_CONFIG) {
        return { ...state, [action.key]: action.value }
    }

    return state
}

export default ConfigReducer
