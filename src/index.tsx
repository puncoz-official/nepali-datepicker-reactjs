import React, { FC, useRef } from "react"

interface DatePickerOptions {
    name: string
}

const NepaliDatePicker: FC<DatePickerOptions> = () => {
    const dateInputField = useRef<HTMLInputElement>(null)

    return (
        <>
            <input type="text" ref={dateInputField} />
        </>
    )
}

export default NepaliDatePicker
