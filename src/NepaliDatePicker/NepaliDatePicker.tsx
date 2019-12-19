import React, { FunctionComponent, useRef, useState } from "react"
import { Calender } from "./Calender"
import { ConfigProvider } from "./Config"
import "./NepaliDatePicker.scss"

interface DatePickerOptions {
    className?: string
}

const NepaliDatePicker: FunctionComponent<DatePickerOptions> = ({ className }) => {
    const [showCalendar, setShowCalendar] = useState(false)
    const dateEl = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState("2077-02-14")

    const handleOnChange = (date: string) => {
        setValue(date)
        // setShowCalendar(false)
    }
    return (
        <ConfigProvider>
            <input
                type="text"
                className={className}
                readOnly={true}
                ref={dateEl}
                value={value}
                onClick={() => setShowCalendar(!showCalendar)}
            />
            {showCalendar && <Calender value={value} onChange={handleOnChange} />}
        </ConfigProvider>
    )
}

NepaliDatePicker.defaultProps = {
    className: "",
}

export default NepaliDatePicker
