import React, { FunctionComponent, useLayoutEffect, useRef } from "react"
import { OptionType } from "./Types"

interface DropDownProps {
    options: OptionType[]
    value: number
    onSelect: (selected: OptionType) => void
    onClose?: () => void
}

const DropDown: FunctionComponent<DropDownProps> = ({ options, value, onSelect, onClose }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const activeElem = wrapperRef.current?.querySelector(".active")
        if (activeElem) {
            activeElem.scrollIntoView({ block: "center" })
        }
        // Scroll into view only once, when the dropdown first opens.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='drop-down' ref={wrapperRef}>
            <div className='option-wrapper'>
                <ul role='listbox'>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            role='option'
                            aria-selected={option.value === value}
                            tabIndex={0}
                            className={option.value === value ? "active" : ""}
                            onClick={() => {
                                onSelect(option)
                            }}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault()
                                    onSelect(option)
                                } else if (event.key === "Escape") {
                                    onClose?.()
                                }
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
