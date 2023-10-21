import React, { FunctionComponent, useCallback, useMemo, useState } from "react"

import { ActionBtn } from "@/components"
import { useData } from "@/hooks"
import { ClassName } from "#/Common.ts"

export interface Option {
  label: string
  value: number
}

type Props = {
  options: Option[]
  value: number
  onSelect: (value: number) => void
  title: string
  className?: ClassName
  dropdownClass?: ClassName
}
const DropDown: FunctionComponent<Props> = ({ options, onSelect, value, title, className, dropdownClass }) => {
  const { state } = useData()

  const [show, setShow] = useState(false)

  const selected = useMemo<Option>(() => {
    return options.find(option => option.value === value) as Option
  }, [value])

  const toggleDropdown = useCallback(() => {
    setShow((prev) => !prev)
  }, [])

  const handleOnSelect = useCallback((option: Option) => {
    setShow(false)
    onSelect(option.value)
  }, [onSelect])

  return (
    <div className={state.options.classNames.dropDownWrapper || `
      ndp__dropdown-wrapper ndp-relative
    `}>
      <ActionBtn onClick={toggleDropdown}
                 onKeyDown={toggleDropdown}
                 className={className}
                 title={title}>
        {selected?.label}
      </ActionBtn>

      {show && (
        <ul className={`
          ${state.options.classNames.dropDown || `
            ndp__dropdown
            ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
            ndp-absolute ndp-w-full
            ndp-bg-white dark:ndp-bg-slate-900
            ndp-top-0 ndp-z-10
            ndp-border ndp-border-gray-300 dark:ndp-border-gray-600
          `}
          ${dropdownClass || ""}
        `}>
          {options.map((option) => (
            <li key={option.value}
                onClick={() => handleOnSelect(option)}
                onKeyDown={() => handleOnSelect(option)}
                role="button"
                className={`
                  ${state.options.classNames.dropDownItem || `
                    ndp__dropdown-item
                    ndp-px-3 ndp-py-1.5 ndp-text-sm hover-transition
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-800
                  `}
                  ${option.value === value && (state.options.classNames.dropDownItemActive || `
                    ndp__dropdown-item-active
                    ndp-bg-primary ndp-text-secondary
                  `)}
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
