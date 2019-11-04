import React, { FunctionComponent } from "react"
import { ParsedDate, SplittedDate } from "../../../types/types"
import DayPickerBody from "./partials/DayPickerBody"
import DayPickerHeader from "./partials/DayPickerHeader"

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
