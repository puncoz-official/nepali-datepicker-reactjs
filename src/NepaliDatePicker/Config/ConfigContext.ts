import { createContext } from "react"
import { initialState } from "./ConfigStoreReducer"
import { ConfigAction, ConfigState } from "./ConfigTypes"

const ConfigContext = createContext<{
    dispatch: (action: ConfigAction) => void
    state: ConfigState
}>({
    dispatch: () => null,
    state: initialState(),
})

export default ConfigContext
