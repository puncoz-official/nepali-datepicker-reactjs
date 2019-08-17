import React      from "react"
import { render } from "react-dom"
import DatePicker from "./../../dist/index.es"

const App = () => (
    <DatePicker name={"Ram"}/>
)

render(<App/>, document.getElementById("root"))
