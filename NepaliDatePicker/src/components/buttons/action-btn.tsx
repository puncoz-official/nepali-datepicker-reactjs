import React, { FunctionComponent, HTMLProps, ReactNode } from "react"

import { useData } from "@/hooks"

interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  type?: "button"
  isDisabled?: boolean
}

const ActionBtn: FunctionComponent<Props> = (props) => {
  const { children, className, type = "button", isDisabled, ...buttonProps } = props

  const { state } = useData()

  return (
    <button className={`
          ${state.options.classNames.actionBtn ?? `
            ndp__action_btn
            ndp-bg-white dark:ndp-bg-slate-800
            hover:ndp-bg-gray-100 dark:hover:ndp-bg-gray-700
            ndp-border-gray-300 dark:ndp-border-gray-600
            dark:hover:ndp-border-gray-600
            focus:ndp-outline-none focus:ndp-ring-0
            ndp-text-sm ndp-px-3 ndp-py-1.5 hover-transition
            ndp-flex ndp-items-center
          `}
          ${props.isDisabled && (state.options.classNames.actionBtnDisabled ?? `
            ndp__action_btn-disabled
            ndp-cursor-not-allowed ndp-select-none
          `)}
          ${className ?? ""}
        `}
            disabled={isDisabled}
            type={type}
            {...buttonProps}>
      {children}
    </button>
  )
}

export default ActionBtn
