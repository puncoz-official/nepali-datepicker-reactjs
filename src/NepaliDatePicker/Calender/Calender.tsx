import React, { Fragment, FunctionComponent, useEffect, useState } from "react"
import { parseBSDate } from "../../Helpers/helpers"
import { useConfig } from "../Config"
import CalenderController from "./components/CalenderController"
import DayPicker from "./components/pickers/DayPicker"

interface CalenderProps {
    value: string
}

const Calender: FunctionComponent<CalenderProps> = ({ value }) => {
    const { setConfig } = useConfig()
    const [isInitialized, setIsInitialized] = useState<boolean>(false)

    useEffect(() => {
        setConfig("currentLocale", "ne")
        setConfig("selectedDate", parseBSDate(value))
        setIsInitialized(true)
    }, [])

    return (
        <div className="nepali-date-picker">
            <div className="calendar-wrapper">
                {isInitialized && (
                    <Fragment>
                        <CalenderController />

                        <DayPicker />
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default Calender
