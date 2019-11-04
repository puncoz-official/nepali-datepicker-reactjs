import React, { FunctionComponent, useRef, useState } from "react"
import { Calender } from "./Calender"
import { ConfigProvider } from "./Config"
import "./NepaliDatePicker.scss"

interface DatePickerOptions {
    className?: string
}

const NepaliDatePicker: FunctionComponent<DatePickerOptions> = ({ className }) => {
    const dateEl = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState("2077-02-14")

    return (
        <ConfigProvider>
            <input type="text" className={className} readOnly={true} ref={dateEl} value={value} />
            <Calender value={value} onChange={setValue} />
        </ConfigProvider>
    )
}

NepaliDatePicker.defaultProps = {
    className: "",
}

export default NepaliDatePicker
