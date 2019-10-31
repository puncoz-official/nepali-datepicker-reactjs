import React, { FunctionComponent, useRef } from "react"
import { Calender } from "./Calender"
import { ConfigProvider } from "./Config"
import "./NepaliDatePicker.scss"

interface DatePickerOptions {
    className?: string
}

const NepaliDatePicker: FunctionComponent<DatePickerOptions> = ({ className }) => {
    const dateEl = useRef<HTMLInputElement>(null)
    const value = "2076-07-14"

    return (
        <ConfigProvider>
            <input type="text" className={className} readOnly ref={dateEl} value={value} />
            <Calender value={value} />
        </ConfigProvider>
    )
}

NepaliDatePicker.defaultProps = {
    className: "",
}

export default NepaliDatePicker
