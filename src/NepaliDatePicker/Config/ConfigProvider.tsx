import React, { FunctionComponent, useReducer } from "react"
import ConfigContext from "./ConfigContext"
import ConfigStoreReducer, { initialState } from "./ConfigStoreReducer"

const ConfigProvider: FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(ConfigStoreReducer, initialState)
    const contextValue = { state, dispatch }

    return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>
}

export default ConfigProvider
