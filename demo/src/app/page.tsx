"use client"
import { ThemeContext } from "@/app/theme-provider"
import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/style.css"
import React, { useContext, useState } from "react"

export default function Home() {
  const { theme } = useContext(ThemeContext)
  const [dateEnglish, setDateEnglish] = useState<string>("2077-03-15")
  const [dateNepali, setDateNepali] = useState<string>("2077-03-15")

  return (
    <main className="flex gap-4">
      <div className="w-1/2">
        <label className="mb-2 inline-block">Date</label>
        <NepaliDatePicker className="block w-full py-2 px-3"
                          value={dateEnglish} />
      </div>

      <div className="w-1/2">
        <label className="mb-2 inline-block">मिति</label>
        <NepaliDatePicker dark={theme === "dark"}
                          value={dateNepali} />
      </div>
    </main>
  )
}
