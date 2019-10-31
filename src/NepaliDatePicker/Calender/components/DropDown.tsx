import React, { FunctionComponent } from "react"
import { OptionType } from "../../types/types"

interface DropDownProps {
    options: OptionType[]
    value: number
}

const DropDown: FunctionComponent<DropDownProps> = ({ options, value }) => {
    return (
        <div className="drop-down-content">
            <div className="option-wrapper">
                <ul>
                    {options.map((option, index) => (
                        <li key={index} className={option.value === value ? "active" : ""}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DropDown
