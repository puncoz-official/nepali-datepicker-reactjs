import React, { FunctionComponent, useLayoutEffect } from "react"
import { OptionType } from "./Types"

interface DropDownProps {
    options: OptionType[]
    value: number
    onSelect: (selected: OptionType) => void
}

const DropDown: FunctionComponent<DropDownProps> = ({ options, value, onSelect }) => {
    useLayoutEffect(() => {
        // const elem = document.querySelector(".active")
        // if (elem) {
        //     elem.scrollIntoView()
        // }
    })
    return (
        <div className='drop-down'>
            <div className='option-wrapper'>
                <ul>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={option.value === value ? "active" : ""}
                            onClick={() => {
                                onSelect(option)
                            }}
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
