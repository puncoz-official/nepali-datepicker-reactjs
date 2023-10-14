"use client"
import React, { createContext, FunctionComponent, ReactNode, useCallback, useEffect, useState } from "react"

type Theme = "dark" | "light"
type Context = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialContext: Context = {
  theme: "dark",
  setTheme: _ => {
  },
}

export const ThemeContext = createContext<Context>(initialContext)

type Props = {
  children: ReactNode
}
const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark")

  const applyTheme = useCallback((theme: Theme) => {
    setTheme(theme)

    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    applyTheme(theme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
