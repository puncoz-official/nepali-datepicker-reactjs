import React, { FunctionComponent } from "react"
import { OptionType } from "../../types/types"

interface DropDownProps {
    options: OptionType[]
    value: number
    onSelect: (selected: OptionType) => void
}

const DropDown: FunctionComponent<DropDownProps> = ({ options, value, onSelect }) => {
    return (
        <div className="drop-down">
            <div className="option-wrapper">
                <ul>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={option.value === value ? "active" : ""}
                            onClick={() => onSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DropDown
