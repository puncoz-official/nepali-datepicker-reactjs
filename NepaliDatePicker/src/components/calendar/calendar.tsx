import React, { FunctionComponent } from "react"

import { useData } from "@/hooks"

import ClearBtn from "./clear-btn.tsx"
import DayPicker from "./day-picker.tsx"
import MonthPicker from "./month-picker.tsx"
import NextBtn from "./next-btn.tsx"
import PreviousBtn from "./previous-btn.tsx"
import TodayBtn from "./today-btn.tsx"
import WeekDays from "./week-days.tsx"
import YearPicker from "./year-picker.tsx"

const Calendar: FunctionComponent = () => {
  const { state } = useData()

  return (
    <div className={state.options.classNames.calendar || `
      ndp__calendar
      ndp-bg-white dark:ndp-bg-slate-800
      ndp-rounded ndp-shadow ndp-box-border
      ndp-text-slate-700 dark:ndp-text-white/80 ndp-text-sm ndp-font-normal
      ndp-leading-tight -ndp-tracking-tight
      ndp-p-4
    `}>
      <div
        className={state.options.classNames.calendarHeader || `
          ndp__calendar-header ndp-flex ndp-items-center ndp-justify-between
        `}>
        <PreviousBtn />
        <div className={state.options.classNames.yearMonthPicker || `
          ndp__year_month_picker ndp-flex
        `}>
          <YearPicker />
          <MonthPicker />
        </div>
        <NextBtn />
      </div>

      <table className={state.options.classNames.calendarBody || `
        ndp__calendar-body ndp-text-center ndp-w-full ndp-border-0
      `}>
        <WeekDays />
        <DayPicker />
      </table>

      <div className={state.options.classNames.calendarFooter || `
        ndp__calendar-footer
        ndp-flex ndp-justify-between ndp-border-t ndp-border-gray-100 dark:ndp-border-gray-700 ndp-pt-2
      `}>
        <TodayBtn />
        <ClearBtn />
      </div>
    </div>
  )
}

export default Calendar
