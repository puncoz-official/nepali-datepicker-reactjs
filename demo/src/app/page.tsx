"use client"
import { ThemeContext } from "@/app/theme-provider"
import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/style.css"
import React, { useContext, useState } from "react"

export default function Home() {
  const { theme } = useContext(ThemeContext)
  const [dateEnglish, setDateEnglish] = useState<string>("")
  const [dateNepali, setDateNepali] = useState<string>("2081-01-15")

  return (
    <main className="flex flex-col gap-4 sm:flex-row">
      <div className="w-full sm:w-1/2">
        <label className="mb-2 inline-block">Date</label>
        <NepaliDatePicker dark={theme === "dark"}
                          value={dateEnglish} />
      </div>

      <div className="w-full sm:w-1/2">
        <label className="mb-2 inline-block">मिति</label>
        <NepaliDatePicker dark={theme === "dark"}
                          value={dateNepali} />
      </div>
    </main>
  )
}
