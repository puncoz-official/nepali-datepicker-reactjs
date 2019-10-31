import React, { FunctionComponent } from "react"
import { NextIcon, PreviousIcon, TodayIcon } from "../../Icons"
import MonthPicker from "./pickers/MonthPicker"
import YearPicker from "./pickers/YearPicker"

const CalenderController: FunctionComponent = () => {
    return (
        <div className="calendar-controller">
            <span className="control icon" title="prev">
                <PreviousIcon />
            </span>
            <span className="control icon" title="today">
                <TodayIcon />
            </span>

            <MonthPicker />
            <YearPicker />

            <span className="control icon" title="next">
                <NextIcon />
            </span>
        </div>
    )
}

export default CalenderController
