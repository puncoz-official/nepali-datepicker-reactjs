"use client"
import { ThemeContext } from "@/app/theme-provider"
import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/style.css"
import React, { useContext, useState } from "react"

export default function Home() {
  const { theme } = useContext(ThemeContext)
  const [dateEnglish, setDateEnglish] = useState<string>("2081-01-15")
  const [dateNepali, setDateNepali] = useState<string>("२०८०-०३-२०")

  const handleOnSelect = (data: any) => {
    console.log(data, "data on select")
  }

  return (
    <main className="flex flex-col gap-4 sm:flex-row">
      <div className="w-full sm:w-1/2">
        <label className="mb-2 inline-block">Date</label>
        <NepaliDatePicker dark={theme === "dark"}
                          value={dateEnglish}
                          placeholder={"Select date"}
                          onChange={setDateEnglish}
                          onSelect={handleOnSelect}
                          className="w-full text-black"
                          isWeekend={(weekDay) => weekDay === 1 || weekDay === 7}
                          options={{
                            classNames: {
                              wrapper: "bg-green",
                            },
                            colors: {
                              primary: "#ef4444",
                              secondary: "#450a0a",
                            },
                            locale: "en",
                            valueLocale: "en",
                            closeOnSelect: false,
                            dateSeparator: "-",
                          }} />

        <div>
          Value: {dateEnglish}
        </div>
      </div>

      <div className="w-full sm:w-1/2">
        <label className="mb-2 inline-block">मिति</label>
        <NepaliDatePicker dark={theme === "dark"}
                          value={dateNepali}
                          onChange={setDateNepali}
                          options={{
                            locale: "ne",
                            valueLocale: "ne",
                            closeOnSelect: true,
                          }} />
        <div>
          Value: {dateNepali}
        </div>
      </div>
    </main>
  )
}
