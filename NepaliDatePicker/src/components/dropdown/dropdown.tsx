import React, { FunctionComponent, useCallback, useMemo, useState } from "react"

import { ClassName } from "#/Common.ts"

export interface Option {
  label: string
  value: number
}

type Props = {
  options: Option[]
  value: number
  onSelect: (selected: Option) => void
  className?: ClassName
}
const DropDown: FunctionComponent<Props> = ({ options, onSelect, value, className }) => {
  const [show, setShow] = useState(false)

  const selected = useMemo<Option>(() => {
    return options.find(option => option.value === value) as Option
  }, [value])

  const toggleDropdown = useCallback(() => {
    setShow((prev) => !prev)
  }, [])

  const handleOnSelect = useCallback((option: Option) => {
    setShow(false)
    onSelect(option)
  }, [onSelect])

  return (
    <div className="ndp-relative">
      <button onClick={toggleDropdown}
              onKeyDown={toggleDropdown}
              className={`
                ndp-border-gray-300
                ndp-px-3 ndp-py-2
                ndp-leading-tight ndp-tracking-normal
                ${className || ""}
              `}>
        {selected?.label}
      </button>

      {show && (
        <ul className={`
          ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
          ndp-absolute ndp-w-full
          ndp-bg-white dark:ndp-bg-slate-900
          ndp-top-0 ndp-z-10
        `}>
          {options.map((option) => (
            <li key={option.value}
                onClick={() => handleOnSelect(option)}
                onKeyDown={() => handleOnSelect(option)}
                role="button"
                className={`
                  ndp-px-3 ndp-py-2 hover-transition
                  ${option.value === value ? `
                    ndp-bg-primary ndp-text-secondary
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-800
                  `}
                `}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDown
