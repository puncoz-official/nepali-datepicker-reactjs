import React, { FunctionComponent } from "react"
import { ParsedDate, SplittedDate } from "../../../Types"
import DayPickerBody from "./DayPickerBody"
import DayPickerHeader from "./DayPickerHeader"

interface DayPickerProps {
    selectedDate: ParsedDate
    calenderDate: ParsedDate
    onDaySelect: (date: SplittedDate) => void
}

const DayPicker: FunctionComponent<DayPickerProps> = ({ selectedDate, calenderDate, onDaySelect }) => {
    return (
        <table>
            <DayPickerHeader />

            <DayPickerBody selectedDate={selectedDate} calenderDate={calenderDate} onSelect={onDaySelect} />
        </table>
    )
}

export default DayPicker
