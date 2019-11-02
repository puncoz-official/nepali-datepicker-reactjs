import React, { createContext, FunctionComponent, useContext, useReducer } from "react"
import { localeType } from "./types/types"

export const SET_CONFIG: string = "set_config"

interface ConfigState {
    currentLocale: localeType
}

type ConfigValue = localeType

interface SetAction {
    type: typeof SET_CONFIG
    key: string
    value: ConfigValue
}

type Action = SetAction

const initialState: ConfigState = {
    currentLocale: "en",
}

const reducer = (state: ConfigState = initialState, action: Action) => {
    if (action.type === SET_CONFIG) {
        return { ...state, [action.key]: action.value }
    }

    return state
}

const ConfigContext = createContext<{
    dispatch: (action: Action) => void
    state: ConfigState
}>({
    dispatch: () => null,
    state: initialState,
})

export const ConfigProvider: FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const contextValue = { state, dispatch }

    return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>
}

export const useConfig = () => {
    const { state, dispatch } = useContext(ConfigContext)

    function setConfig(key: string, value: ConfigValue) {
        dispatch({
            key,
            type: SET_CONFIG,
            value,
        })
    }

    function getConfig<T>(key: string): T {
        return state[key]
    }

    return {
        getConfig,
        setConfig,
    }
}
