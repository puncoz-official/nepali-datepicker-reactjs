import React      from "react"
import { render } from "react-dom"
import DatePicker from "nepali-datepicker-reactjs"

const App = () => (
    <div>
        <DatePicker name="World"/>
    </div>
)

render(<App/>, document.getElementById("root"))
