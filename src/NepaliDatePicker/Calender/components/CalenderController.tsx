import React, { FunctionComponent } from "react"
import { useConfig } from "../../Config"
import { NextIcon, PreviousIcon, TodayIcon } from "../../Icons"
import { useTrans } from "../../Locale"
import { localeType, ParsedDate } from "../../Types"
import MonthPicker from "./MonthPicker"
import YearPicker from "./YearPicker"

interface CalenderControllerProps {
    onNextMonth: () => void
    onPreviousMonth: () => void
    onToday: () => void
    onYearSelect: (year: number) => void
    onMonthSelect: (year: number) => void
    calenderDate: ParsedDate
}

const CalenderController: FunctionComponent<CalenderControllerProps> = (props) => {
    const { onNextMonth, onPreviousMonth, calenderDate, onToday, onYearSelect, onMonthSelect } = props
    const { getConfig } = useConfig()
    const { trans } = useTrans(getConfig<localeType>("currentLocale"))

    return (
        <div className='calendar-controller'>
            <span className='control icon' title={trans("previous")} onClick={onPreviousMonth}>
                <PreviousIcon />
            </span>

            <div className='date-indicator'>
                <MonthPicker date={calenderDate} onSelect={onMonthSelect} />
                <YearPicker date={calenderDate} onSelect={onYearSelect} />
            </div>

            <span className='control icon icon-today' title={trans("today")} onClick={onToday}>
                <TodayIcon color='#2096f5' />
            </span>

            <span className='control icon' title={trans("next")} onClick={onNextMonth}>
                <NextIcon />
            </span>
        </div>
    )
}

export default CalenderController
