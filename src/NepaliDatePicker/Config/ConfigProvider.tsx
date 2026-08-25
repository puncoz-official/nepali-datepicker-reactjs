import React, { FunctionComponent, useReducer } from "react"
import ConfigContext from "./ConfigContext"
import ConfigStoreReducer, { initialState } from "./ConfigStoreReducer"
import { IContextProviderProps } from "../Types"

const ConfigProvider: FunctionComponent<IContextProviderProps> = ({ children, minYear, maxYear, minDate, maxDate }) => {
    const [state, dispatch] = useReducer(ConfigStoreReducer, initialState(minYear, maxYear, minDate, maxDate))
    const contextValue = { state, dispatch }

    return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>
}

export default ConfigProvider
