import React, { FunctionComponent, useMemo } from "react"
import { range } from "../../../../Helpers/helpers"
import { OptionType, ParsedDate } from "../../../types/types"
import DropDown from "../DropDown"

interface YearPickerProps {
    date: ParsedDate
    onSelect: (year: number) => void
}

const YearPicker: FunctionComponent<YearPickerProps> = ({ date, onSelect }) => {
    const currentYear: OptionType = useMemo((): OptionType => {
        const year = date.bsYear
        return {
            label: year.toString(),
            value: year,
        }
    }, [date])

    const years: OptionType[] = useMemo(
        (): OptionType[] =>
            range(2070, 2080).map(
                (year: number): OptionType => ({
                    label: year.toString(),
                    value: year,
                }),
            ),
        [],
    )

    return (
        <div className="control year">
            <span className="current-year">{currentYear.label}</span>
            <DropDown options={years} value={currentYear.value} onSelect={selected => onSelect(selected.value)} />
        </div>
    )
}

export default YearPicker
