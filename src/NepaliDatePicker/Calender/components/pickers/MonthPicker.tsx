import React, { FunctionComponent, useMemo } from "react"
import { months } from "../../../../Helpers/CalenderData"
import { useConfig } from "../../../Config"
import { localeType, OptionType, ParsedDate } from "../../../types/types"
import DropDown from "../DropDown"

const MonthPicker: FunctionComponent = () => {
    const { getConfig } = useConfig()
    const currentLocale: localeType = useMemo(() => getConfig<localeType>("currentLocale"), [])
    const currentMonth: OptionType = useMemo((): OptionType => {
        const month = getConfig<ParsedDate>("selectedDate").bsMonth - 1
        return {
            label: months[currentLocale][month],
            value: month,
        }
    }, [])

    const monthList: OptionType[] = useMemo(() => {
        return months[currentLocale].map((month, index) => ({
            label: month,
            value: index,
        }))
    }, [])

    return (
        <div className="control month">
            <span className="current-month">{currentMonth.label}</span>
            <DropDown options={monthList} value={currentMonth.value} />
        </div>
    )
}

export default MonthPicker
