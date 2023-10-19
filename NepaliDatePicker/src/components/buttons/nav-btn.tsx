import React, { FunctionComponent, HTMLProps, ReactNode } from "react"

interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  type?: "button"
}

const NavBtn: FunctionComponent<Props> = (props) => {
  const { children, className, type = "button", ...buttonProps } = props

  return (

    <button className={`
              ndp-flex ndp-justify-center ndp-items-center hover-transition
              ndp-border-0 ndp-h-10 ndp-w-10 ndp-rounded-full
              hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
              ${className || ""}
            `}
            type={type}
            {...buttonProps}>
      {children}
    </button>
  )
}

export default NavBtn
