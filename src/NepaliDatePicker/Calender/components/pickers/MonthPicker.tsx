import React, { FunctionComponent, useMemo } from "react"
import { months } from "../../../../Helpers/CalenderData"
import { useConfig } from "../../../Config"
import { localeType, OptionType, ParsedDate } from "../../../types/types"
import DropDown from "../DropDown"

interface MonthPickerProps {
    date: ParsedDate
    onSelect: (year: number) => void
}

const MonthPicker: FunctionComponent<MonthPickerProps> = ({ date, onSelect }) => {
    const { getConfig } = useConfig()

    const currentLocale: localeType = useMemo(() => getConfig<localeType>("currentLocale"), [getConfig])

    const currentMonth: OptionType = useMemo((): OptionType => {
        const month = date.bsMonth
        return {
            label: months[currentLocale][month - 1],
            value: month,
        }
    }, [date, currentLocale])

    const monthList: OptionType[] = useMemo(() => {
        return months[currentLocale].map((month, index) => ({
            label: month,
            value: index + 1,
        }))
    }, [currentLocale])

    return (
        <div className="control month">
            <span className="current-month">{currentMonth.label}</span>
            <DropDown options={monthList} value={currentMonth.value} onSelect={selected => onSelect(selected.value)} />
        </div>
    )
}

export default MonthPicker
