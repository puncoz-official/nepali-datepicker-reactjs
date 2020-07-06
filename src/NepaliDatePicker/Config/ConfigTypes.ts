import { localeType } from "../Types"

export const SET_CONFIG: string = "set_config"

export interface ConfigState {
    currentLocale: localeType
}

export type ConfigValue = localeType

export interface ConfigAction {
    type: typeof SET_CONFIG
    key: string
    value: ConfigValue
}
