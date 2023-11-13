import React, { FunctionComponent, useMemo } from "react"

import { Option } from "@/components"
import { useData, useTrans } from "@/hooks"
import { Weeks } from "#/Translations.ts"

const WeekDays: FunctionComponent = () => {
  const { trans } = useTrans()
  const { state } = useData()

  const weekList = useMemo<Option[]>(() => {
    return Weeks.map((week, index) => ({
      label: trans(`weeks.${week}`),
      value: index,
    }))
  }, [state.locale.calendar])

  return (
    <thead>
      <tr className={state.options.classNames.weekDaysTr ?? `ndp__weekdays-tr ndp-border-0`}>
        {weekList.map((weekDay) => (
          <td key={weekDay.value}
              className={`
                ${state.options.classNames.weekDaysTd ?? "ndp__weekdays-td ndp-border-0 ndp-h-10 ndp-w-10"}

                ${state.modifiers.isWeekend(weekDay.value + 1) && (state.options.classNames.weekDaysTdWeekend ?? `
                  ndp__weekdays-td-weekend ndp-text-red-500
                `)}
              `}
              title={weekDay.label}>
            {weekDay.label}
          </td>
        ))}
      </tr>
    </thead>
  )
}

export default WeekDays
