import React, { FunctionComponent, useRef } from "react"

interface DatePickerOptions {
    className: string
}

const NepaliDatePicker: FunctionComponent<DatePickerOptions> = ({ className }) => {
    const dateEl = useRef<HTMLInputElement>(null)

    return (
        <>
            <input type="text" className={className} readOnly ref={dateEl}/>
            <div className={"asd"}>
                <p>hello</p>
            </div>
        </>
    )
}

export default NepaliDatePicker
