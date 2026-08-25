import { ADToBS } from "bikram-sambat-js"
import { NEPALI, SplittedDate } from "../Types"
import { ConfigAction, ConfigState, SET_CONFIG } from "./ConfigTypes"

// Parses a BS date string directly, without importing Utils/common, to
// avoid a module import cycle (common.ts imports from this Config module).
const parseBsDateString = (bsDate: string): SplittedDate => {
    const [year, month, day] = bsDate.split("-").map(Number)
    return { year, month, day }
}

const adDateStringToBsSplit = (adDate?: string): SplittedDate | null => {
    if (!adDate) {
        return null
    }
    return parseBsDateString(ADToBS(adDate))
}

export const initialState = (minYear?: number, maxYear?: number, minDate?: string, maxDate?: string): ConfigState => {
    return {
        currentLocale: NEPALI,
        minYear: minYear ?? 2000,
        maxYear: maxYear ?? 2100,
        minDateBS: adDateStringToBsSplit(minDate),
        maxDateBS: adDateStringToBsSplit(maxDate),
    }
}

const ConfigReducer = (state: ConfigState = initialState(), action: ConfigAction): ConfigState => {
    if (action.type === SET_CONFIG) {
        return { ...state, [action.key]: action.value }
    }

    return state
}

export default ConfigReducer
