import React, {
    FunctionComponent,
    useRef,
} from "react"
import { Calender } from "./Calender"
import "./NepaliDatePicker.scss"

interface DatePickerOptions {
    className: string
}

const NepaliDatePicker: FunctionComponent<DatePickerOptions> = ({ className }) => {
    const dateEl = useRef<HTMLInputElement>(null)
    const dateAd = new Date()
    const dateBs = dateAd

    return (
        <>
            <input type="text" className={className} readOnly ref={dateEl}/>
            {dateBs.getTime()}
            <Calender/>
        </>
    )
}

export default NepaliDatePicker
