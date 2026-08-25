import React, { FunctionComponent, useMemo } from "react"
import { CalenderData, useConfig } from "../../Config"
import { DropDown, OptionType } from "../../DropDown"
import { localeType, ParsedDate } from "../../Types"

interface MonthPickerProps {
    date: ParsedDate
    onSelect: (year: number) => void
    isOpen: boolean
    onToggle: () => void
}

const MonthPicker: FunctionComponent<MonthPickerProps> = ({ date, onSelect, isOpen, onToggle }) => {
    const { getConfig } = useConfig()
    const currentLocale: localeType = useMemo(() => getConfig<localeType>("currentLocale"), [getConfig])

    const currentMonth: OptionType = useMemo((): OptionType => {
        const month = date.bsMonth

        return {
            label: CalenderData.months[currentLocale][month - 1],
            value: month,
        }
    }, [date, currentLocale])

    const monthList: OptionType[] = useMemo(() => {
        return CalenderData.months[currentLocale].map((month, index) => ({
            label: month,
            value: index + 1,
        }))
    }, [currentLocale])

    const handleDropdownView = (selected: OptionType) => {
        onToggle()
        onSelect(selected.value)
    }

    return (
        <div className='control month'>
            <span
                className='current-month'
                role='button'
                tabIndex={0}
                aria-haspopup='listbox'
                aria-expanded={isOpen}
                onClick={onToggle}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        onToggle()
                    } else if (event.key === "Escape" && isOpen) {
                        onToggle()
                    }
                }}
            >
                {currentMonth.label}
            </span>
            {isOpen && (
                <DropDown
                    options={monthList}
                    value={currentMonth.value}
                    onSelect={handleDropdownView}
                    onClose={onToggle}
                />
            )}
        </div>
    )
}

export default MonthPicker
