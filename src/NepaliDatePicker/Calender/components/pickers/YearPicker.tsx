import React, { FunctionComponent, useMemo, useState } from "react"
import { range } from "../../../../Helpers/helpers"
import useTrans from "../../../../Helpers/useTrans"
import { useConfig } from "../../../Config"
import { localeType, OptionType, ParsedDate } from "../../../types/types"
import DropDown from "../DropDown"

interface YearPickerProps {
    date: ParsedDate
    onSelect: (year: number) => void
}

const YearPicker: FunctionComponent<YearPickerProps> = ({ date, onSelect }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const { getConfig } = useConfig()
    const { numberTrans } = useTrans(getConfig<localeType>("locale"))

    const currentYear: OptionType = useMemo((): OptionType => {
        const year = date.bsYear

        return {
            label: numberTrans(year),
            value: year,
        }
    }, [date])

    const years: OptionType[] = useMemo(
        (): OptionType[] =>
            range(2000, 2080).map(
                (year: number): OptionType => ({
                    label: numberTrans(year),
                    value: year,
                }),
            ),
        [],
    )

    const handleDropdownView = (selected: OptionType) => {
        setShowDropdown(!showDropdown)
        onSelect(selected.value)
    }

    return (
        <div className="control year">
            <span className="current-year" onClick={() => setShowDropdown(!showDropdown)}>
                {currentYear.label}
            </span>
            {showDropdown && <DropDown options={years} value={currentYear.value} onSelect={handleDropdownView} />}
        </div>
    )
}

export default YearPicker
