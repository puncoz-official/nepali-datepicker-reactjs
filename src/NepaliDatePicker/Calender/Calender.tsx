import { ADToBS } from "bikram-sambat-js"
import React, { Fragment, FunctionComponent, useCallback, useEffect, useState } from "react"
import { parseBSDate, stitchDate } from "../../Helpers/helpers"
import { useConfig } from "../Config"
import { ParsedDate, parsedDateInitialValue, SplittedDate } from "../types/types"
import CalenderController from "./components/CalenderController"
import DayPicker from "./components/pickers/DayPicker"

interface CalenderProps {
    value: string
    onChange: (value: string) => void
}

const Calender: FunctionComponent<CalenderProps> = ({ value, onChange }) => {
    const { setConfig } = useConfig()
    const [isInitialized, setIsInitialized] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<ParsedDate>(parsedDateInitialValue)
    const [calenderDate, setCalenderDate] = useState<ParsedDate>(parsedDateInitialValue)

    useEffect(() => {
        if (isInitialized) {
            onChange(stitchDate({ year: selectedDate.bsYear, month: selectedDate.bsMonth, day: selectedDate.bsDay }))
        }
    }, [selectedDate, isInitialized])

    useEffect(() => {
        setConfig("currentLocale", "ne")
        const parsedDateValue = parseBSDate(value)

        setSelectedDate(parsedDateValue)
        setCalenderDate(parsedDateValue)
        setIsInitialized(true)
    }, [value])

    const onPreviousMonthHandler = useCallback(() => {
        setCalenderDate(date => {
            let year = date.bsYear
            let month = date.bsMonth - 1

            if (month < 1) {
                month = 12
                year--
            }

            return parseBSDate(
                stitchDate(
                    {
                        day: date.bsDay,
                        month,
                        year,
                    },
                    "-",
                ),
            )
        })
    }, [])

    const onNextMonthClickHandler = useCallback(() => {
        setCalenderDate(date => {
            let year = date.bsYear
            let month = date.bsMonth + 1

            if (month > 12) {
                month = 1
                year++
            }

            return parseBSDate(
                stitchDate(
                    {
                        day: date.bsDay,
                        month,
                        year,
                    },
                    "-",
                ),
            )
        })
    }, [])

    const onTodayClickHandler = useCallback(() => {
        const today = parseBSDate(ADToBS(new Date()))

        setCalenderDate(today)
        setSelectedDate(today)
    }, [])

    const onYearSelectHandler = useCallback(
        year => {
            setCalenderDate(parseBSDate(stitchDate({ year, month: calenderDate.bsMonth, day: calenderDate.bsDay })))
        },
        [calenderDate],
    )

    const onMonthSelectHandler = useCallback(
        month => {
            setCalenderDate(parseBSDate(stitchDate({ year: calenderDate.bsYear, month, day: calenderDate.bsDay })))
        },
        [calenderDate],
    )

    const onDaySelectHandler = useCallback((date: SplittedDate) => {
        const newDate = parseBSDate(stitchDate(date))

        setCalenderDate(newDate)
        setSelectedDate(newDate)
    }, [])

    return (
        <div className="nepali-date-picker">
            <div className="calendar-wrapper">
                {isInitialized && (
                    <Fragment>
                        <CalenderController
                            onPreviousMonth={onPreviousMonthHandler}
                            onNextMonth={onNextMonthClickHandler}
                            calenderDate={calenderDate}
                            onToday={onTodayClickHandler}
                            onYearSelect={onYearSelectHandler}
                            onMonthSelect={onMonthSelectHandler}
                        />

                        <DayPicker
                            selectedDate={selectedDate}
                            calenderDate={calenderDate}
                            onDaySelect={onDaySelectHandler}
                        />
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default Calender
