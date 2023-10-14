"use client"
import { ThemeContext } from "@/app/theme-provider"
import React, { FunctionComponent, HTMLAttributes, useContext } from "react"
import { HiMoon, HiSun } from "react-icons/hi2"

type Props = {
  className?: HTMLAttributes<HTMLElement>["className"]
}
const ThemeButton: FunctionComponent<Props> = ({ className }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return theme === "light" ? (
    <button className={`px-2 py-2 group hover-transition-all rounded inset-2 shadow border
                            bg-slate-200 hover:border-slate-600 ${className || ""}`}
            onClick={() => setTheme("dark")}>
      <HiMoon className="w-5 h-5 text-slate-700 group-hover:text-slate-950 hover-transition-all" />
    </button>
  ) : (
    <button className={`px-2 py-2 group hover-transition-all rounded inset-2 shadow border border-transparent
                            bg-slate-950 hover:border-slate-600`}
            onClick={() => setTheme("light")}>
      <HiSun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-200 hover-transition-all" />
    </button>
  )
}

export default ThemeButton
