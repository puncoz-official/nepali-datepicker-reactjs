import { ADToBS } from "bikram-sambat-js"
import React, { FunctionComponent, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Calender } from "./Calender"
import { useConfig } from "./Config"
import { useTrans } from "./Locale"
import { ENGLISH, INepaliDatePicker, localeType, NepaliDatepickerEvents } from "./Types"
import { childOf, executionDelegation, stitchDate } from "./Utils/common"

const NepaliDatePicker: FunctionComponent<INepaliDatePicker> = (props) => {
    const { className, inputClassName, value, onChange, onSelect, options, todayIfEmpty } = props

    const nepaliDatePickerWrapper = useRef<HTMLDivElement>(null)
    const nepaliDatePickerInput = useRef<HTMLInputElement>(null)

    const [date, setDate] = useState<string>("")
    const [showCalendar, setShowCalendar] = useState<boolean>(false)

    const { setConfig, getConfig } = useConfig()
    const { numberTrans } = useTrans(getConfig<localeType>("currentLocale"))

    const toEnglish = useCallback((val: string): string => numberTrans(val, ENGLISH), [])
    const returnDateValue = useCallback((val: string): string => numberTrans(val, options.valueLocale), [
        options.valueLocale,
    ])

    useEffect(() => {
        setConfig("currentLocale", options.calenderLocale)
    }, [options.calenderLocale])

    useEffect(() => {
        setDate(toEnglish(value || (todayIfEmpty ? ADToBS(new Date()) : "")))
    }, [value])

    const handleClickOutside = useCallback((event: any) => {
        if (nepaliDatePickerWrapper.current && childOf(event.target, nepaliDatePickerWrapper.current)) {
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
        if (showCalendar && nepaliDatePickerWrapper.current) {
            const nepaliDatePicker = nepaliDatePickerWrapper.current.getBoundingClientRect()
            const screenHeight = window.innerHeight

            const calender: HTMLDivElement | null = nepaliDatePickerWrapper.current.querySelector(".calender")
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

    const handleOnChange = useCallback(
        (changedDate: string) => {
            executionDelegation(
                () => {
                    setDate(changedDate)
                },
                () => {
                    if (onChange) {
                        onChange(returnDateValue(changedDate))
                    }
                },
            )
        },
        [onChange],
    )

    const handleOnDaySelect = useCallback(
        (selectedDate) => {
            executionDelegation(
                () => {
                    if (options.closeOnSelect) {
                        setShowCalendar(false)
                    }
                },
                () => {
                    if (onSelect) {
                        onSelect(returnDateValue(stitchDate(selectedDate)))
                    }
                },
            )
        },
        [onSelect],
    )

    const datepickerEvents: NepaliDatepickerEvents = {
        change: handleOnChange,
        daySelect: handleOnDaySelect,
        todaySelect: handleOnDaySelect,
    }

    return (
        <div ref={nepaliDatePickerWrapper} className={`nepali-date-picker ${className}`}>
            <input
                type='text'
                ref={nepaliDatePickerInput}
                className={inputClassName}
                readOnly={true}
                value={numberTrans(date)}
                onClick={() => setShowCalendar((visible) => !visible)}
            />
            {showCalendar && <Calender value={date && date} events={datepickerEvents} />}
        </div>
    )
}

export default NepaliDatePicker
