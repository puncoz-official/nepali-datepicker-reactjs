import React, { FunctionComponent, useState } from "react"
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
    isPreviousDisabled?: boolean
    isNextDisabled?: boolean
}

type OpenDropdown = "month" | "year" | null

const CalenderController: FunctionComponent<CalenderControllerProps> = (props) => {
    const {
        onNextMonth,
        onPreviousMonth,
        calenderDate,
        onToday,
        onYearSelect,
        onMonthSelect,
        isPreviousDisabled,
        isNextDisabled,
    } = props
    const { getConfig } = useConfig()
    const { trans } = useTrans(getConfig<localeType>("currentLocale"))
    const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null)

    return (
        <div className='calendar-controller'>
            <button
                type='button'
                className='control icon'
                title={trans("previous")}
                aria-label={trans("previous")}
                disabled={isPreviousDisabled}
                onClick={onPreviousMonth}
            >
                <PreviousIcon />
            </button>

            <div className='date-indicator'>
                <MonthPicker
                    date={calenderDate}
                    onSelect={onMonthSelect}
                    isOpen={openDropdown === "month"}
                    onToggle={() => setOpenDropdown((current) => (current === "month" ? null : "month"))}
                />
                <YearPicker
                    date={calenderDate}
                    onSelect={onYearSelect}
                    isOpen={openDropdown === "year"}
                    onToggle={() => setOpenDropdown((current) => (current === "year" ? null : "year"))}
                />
            </div>

            <button
                type='button'
                className='control icon icon-today'
                title={trans("today")}
                aria-label={trans("today")}
                onClick={onToday}
            >
                <TodayIcon color='#2096f5' />
            </button>

            <button
                type='button'
                className='control icon'
                title={trans("next")}
                aria-label={trans("next")}
                disabled={isNextDisabled}
                onClick={onNextMonth}
            >
                <NextIcon />
            </button>
        </div>
    )
}

export default CalenderController
