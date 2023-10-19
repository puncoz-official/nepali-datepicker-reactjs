import React, { FunctionComponent } from "react"

import NextBtn from "@/components/calendar/next-btn.tsx"

import DayPicker from "./day-picker.tsx"
import MonthPicker from "./month-picker.tsx"
import PreviousBtn from "./previous-btn.tsx"
import WeekDays from "./week-days.tsx"
import YearPicker from "./year-picker.tsx"

const Calendar: FunctionComponent = () => {
  return (
    <div className={`
      ndp-bg-white dark:ndp-bg-slate-800
      ndp-rounded ndp-shadow ndp-box-border
      ndp-text-slate-700 dark:ndp-text-white/80 ndp-text-sm ndp-font-normal
      ndp-leading-tight -ndp-tracking-tight
      ndp-p-4
    `}>
      <div className="ndp-flex ndp-items-center ndp-justify-between">
        <PreviousBtn />
        <div className="ndp-flex">
          <YearPicker />
          <MonthPicker />
        </div>
        <NextBtn />
      </div>

      <table className="ndp-text-center ndp-w-full ndp-border-0">
        <WeekDays />
        <DayPicker />
      </table>

      <div className="">
        <button>Today</button>

        <button>Clear</button>
      </div>
    </div>
  )
}

export default Calendar
