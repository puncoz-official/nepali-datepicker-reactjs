import React from "react"
import DayPickerBody from "./partials/DayPickerBody"
import DayPickerHeader from "./partials/DayPickerHeader"

const DayPicker = () => {
    return (
        <table>
            <DayPickerHeader />

            <DayPickerBody />
        </table>
    )
}

export default DayPicker
