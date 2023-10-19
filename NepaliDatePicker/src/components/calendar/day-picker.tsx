import React, { FunctionComponent, useMemo } from "react"

import { useTrans } from "@/components"
import { range } from "@/utils"

const DayPicker: FunctionComponent = () => {
  const { numberTrans } = useTrans()
  const weeksInMonth = useMemo<number>(() => 5, [])

  return (
    <tbody>
      {range(0, weeksInMonth).map((weekNum) => (
        <tr key={weekNum} className="ndp-border-0">
          {range(1, 7).map((weekDayNum) => (
            <td key={weekDayNum}
                className={`
                  ndp-border-0 ndp-h-10 ndp-w-10  ndp-rounded-full
                  ndp-relative ndp-cursor-pointer hover-transition
                  ${weekNum === 2 && weekDayNum === 3 ? `
                    ndp-bg-primary ndp-text-secondary ndp-m-2
                    hover:ndp-opacity-80
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
                  `}
                `}
                title={numberTrans(weekDayNum * (weekNum + 1))}>
              {numberTrans(weekDayNum * (weekNum + 1))}
              {weekNum === 3 && weekDayNum === 5 && (
                <div className={`
                  ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                  ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                `} />
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default DayPicker
