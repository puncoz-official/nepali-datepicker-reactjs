import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/style.css"
import React from "react"

export default function Home() {
  return (
    <main className="flex gap-4">
      <div className="w-1/2">
        <label className="mb-2 inline-block">Date</label>
        <NepaliDatePicker className={""} />
      </div>

      <div className="w-1/2">
        <label className="mb-2 inline-block">मिति</label>
        <NepaliDatePicker className={""} />
      </div>
    </main>
  )
}
