import React, { FunctionComponent, useRef } from "react"
import "./NepaliDatePicker.scss"

interface DatePickerOptions {
    className: string
}

const NepaliDatePicker: FunctionComponent<DatePickerOptions> = ({ className }) => {
    const dateEl = useRef<HTMLInputElement>(null)

    return (
        <>
            <input type="text" className={className} readOnly ref={dateEl}/>
            <div className={"nepali-date-picker"}>
                <p>hello</p>
            </div>
        </>
    )
}

export default NepaliDatePicker
