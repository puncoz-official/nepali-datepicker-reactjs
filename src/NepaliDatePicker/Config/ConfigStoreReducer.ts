import { NEPALI } from "../Types"
import { ConfigAction, ConfigState, SET_CONFIG } from "./ConfigTypes"

export const initialState = (minYear?: number, maxYear?: number): ConfigState => {
    return {
        currentLocale: NEPALI,
        minYear: minYear ?? 2000,
        maxYear: maxYear ?? 2100,
    }
}

const ConfigReducer = (state: ConfigState = initialState(), action: ConfigAction): ConfigState => {
    if (action.type === SET_CONFIG) {
        return { ...state, [action.key]: action.value }
    }

    return state
}

export default ConfigReducer
