import React, { FunctionComponent, useMemo } from "react"

import { Option } from "@/components"
import { useTrans } from "@/hooks"
import { Weeks } from "#/Translations.ts"

const WeekDays: FunctionComponent = () => {
  const { trans } = useTrans()

  const weekList = useMemo<Option[]>(() => {
    return Weeks.map((week, index) => ({
      label: trans(`weeks.${week}`),
      value: index,
    }))
  }, [])

  return (
    <thead>
      <tr className="ndp-border-0">
        {weekList.map((weekDay) => (
          <td key={weekDay.value}
              className="ndp-border-0 ndp-h-10 ndp-w-10"
              title={weekDay.label}>
            {weekDay.label}
          </td>
        ))}
      </tr>
    </thead>
  )
}

export default WeekDays
