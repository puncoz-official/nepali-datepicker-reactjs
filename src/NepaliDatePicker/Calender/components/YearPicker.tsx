import React, { FunctionComponent, useMemo } from "react"
import { useConfig } from "../../Config"
import { DropDown, OptionType } from "../../DropDown"
import { useTrans } from "../../Locale"
import { localeType, ParsedDate } from "../../Types"
import { range } from "../../Utils/common"

interface YearPickerProps {
    date: ParsedDate
    onSelect: (year: number) => void
    isOpen: boolean
    onToggle: () => void
}

const YearPicker: FunctionComponent<YearPickerProps> = ({ date, onSelect, isOpen, onToggle }) => {
    const { getConfig } = useConfig()
    const { numberTrans } = useTrans(getConfig<localeType>("currentLocale"))

    const currentYear: OptionType = useMemo((): OptionType => {
        const year = date.bsYear

        return {
            label: numberTrans(year),
            value: year,
        }
    }, [date])

    const years: OptionType[] = useMemo(
        (): OptionType[] =>
            range(getConfig("minYear"), getConfig("maxYear"))
                .reverse()
                .map(
                    (year: number): OptionType => ({
                        label: numberTrans(year),
                        value: year,
                    }),
                ),
        [],
    )

    const handleDropdownView = (selected: OptionType) => {
        onToggle()
        onSelect(selected.value)
    }

    return (
        <div className='control year'>
            <span
                className='current-year'
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
                {currentYear.label}
            </span>
            {isOpen && (
                <DropDown options={years} value={currentYear.value} onSelect={handleDropdownView} onClose={onToggle} />
            )}
        </div>
    )
}

export default YearPicker
