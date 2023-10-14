import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import React from "react"
import "nepali-datepicker-reactjs/dist/style.css"

export default function Home() {
  return (
    <main className="bg-red-200">
      <NepaliDatePicker className={""} />
    </main>
  )
}
