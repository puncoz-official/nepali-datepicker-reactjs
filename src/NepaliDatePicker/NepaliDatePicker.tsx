import { ADToBS } from "bikram-sambat-js"
import { englishToNepaliNumber, nepaliToEnglishNumber } from "nepali-number"
import React, { FunctionComponent, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { executionDelegation, stitchDate } from "../Helpers/helpers"
import { Calender } from "./Calender"
import { ConfigProvider } from "./Config"
import "./NepaliDatePicker.scss"
import { DatepickerEvents, DatepickerOptions } from "./types/types"

const defaultOptions: DatepickerOptions = {
    closeOnSelect: true,
    calenderLocale: "ne",
    valueLocale: "en",
}

type Props = {
    className?: string
    value: string
    onChange?: (value: string) => void
    onSelect?: (value: string) => void
    options?: DatepickerOptions
}

const childOf = (childNode: any, parentNode: any): boolean => parentNode.contains(childNode)

const NepaliDatePicker: FunctionComponent<Props> = (props) => {
    const { className, value, onChange, onSelect, options } = props

    const [showCalendar, setShowCalendar] = useState<boolean>(false)
    const dateEl = useRef<HTMLInputElement>(null)
    const datepicker = useRef<HTMLInputElement>(null)
    const [date, setDate] = useState<string>("")
    const [datepickerOptions, setDatePickerOptions] = useState<DatepickerOptions>(defaultOptions)

    const fetchDate = useCallback((val: string): string => nepaliToEnglishNumber(val), [])

    const returnDate = useCallback(
        (val: string): string =>
            datepickerOptions.valueLocale === "en" ? nepaliToEnglishNumber(val) : englishToNepaliNumber(val),
        [datepickerOptions.valueLocale],
    )

    useEffect(() => {
        setDate(fetchDate(!value ? ADToBS(new Date()) : value))
    }, [value])

    useEffect(() => {
        setDatePickerOptions((prevOptions) => ({ ...prevOptions, ...options }))
    }, [options])

    const handleClickOutside = useCallback((event: any) => {
        if (datepicker.current && childOf(event.target, datepicker.current)) {
            return
        }

        setShowCalendar(false)
    }, [])

    useLayoutEffect(() => {
        if (showCalendar) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [showCalendar])

    useLayoutEffect(() => {
        if (showCalendar && datepicker.current) {
            const nepaliDatePicker = datepicker.current.getBoundingClientRect()
            const screenHeight = window.innerHeight

            const calender: HTMLDivElement | null = datepicker.current.querySelector(".calender")
            if (calender) {
                setTimeout(() => {
                    const calenderHeight = calender.clientHeight

                    if (calenderHeight + nepaliDatePicker.bottom > screenHeight) {
                        if (calenderHeight < nepaliDatePicker.top) {
                            calender.style.bottom = `${nepaliDatePicker.height}px`
                        }
                    }
                }, 0)
            }
        }
    }, [showCalendar])

    const handleOnChange = useCallback((changedDate: string) => {
        executionDelegation(
            () => {
                setDate(changedDate)
            },
            () => {
                if (onChange) {
                    onChange(returnDate(changedDate))
                }
            },
        )
    }, [])

    const handleOnDaySelect = useCallback((selectedDate) => {
        executionDelegation(
            () => {
                if (datepickerOptions.closeOnSelect) {
                    setShowCalendar(false)
                }
            },
            () => {
                if (onSelect) {
                    onSelect(returnDate(stitchDate(selectedDate)))
                }
            },
        )
    }, [])

    const datepickerEvents: DatepickerEvents = {
        change: handleOnChange,
        daySelect: handleOnDaySelect,
        todaySelect: handleOnDaySelect,
    }

    return (
        <ConfigProvider>
            <div ref={datepicker} className="nepali-date-picker">
                <input
                    type="text"
                    className={className}
                    readOnly={true}
                    ref={dateEl}
                    value={returnDate(date)}
                    onClick={() => setShowCalendar(!showCalendar)}
                />
                {showCalendar && (
                    <Calender locale={datepickerOptions.calenderLocale} value={date} events={datepickerEvents} />
                )}
            </div>
        </ConfigProvider>
    )
}

NepaliDatePicker.defaultProps = {
    className: "",
}

export default NepaliDatePicker
