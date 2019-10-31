import React, { FunctionComponent, useMemo } from "react"
import { maxBSYear, minBSYear } from "../../../../Helpers/CalenderData"
import { range } from "../../../../Helpers/helpers"
import { useConfig } from "../../../Config"
import { OptionType, ParsedDate } from "../../../types/types"
import DropDown from "../DropDown"

const YearPicker: FunctionComponent = () => {
    const { getConfig } = useConfig()
    const currentYear: OptionType = useMemo((): OptionType => {
        const year = getConfig<ParsedDate>("selectedDate").bsYear
        return {
            label: year.toString(),
            value: year,
        }
    }, [])

    const years: OptionType[] = useMemo(
        (): OptionType[] =>
            range(minBSYear, maxBSYear).map(
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
            <DropDown options={years} value={currentYear.value} />
        </div>
    )
}

export default YearPicker
