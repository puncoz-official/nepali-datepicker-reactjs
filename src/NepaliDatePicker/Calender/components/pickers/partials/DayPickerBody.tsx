import { ADToBS } from "bikram-sambat-js"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { minBSYear } from "../../../../../Helpers/CalenderData"
import { getNumberOfDaysInBSMonth, range, splitDate } from "../../../../../Helpers/helpers"
import { useConfig } from "../../../../Config"
import { ParsedDate } from "../../../../types/types"

const DayPickerBody = () => {
    const { getConfig } = useConfig()
    const [date, setDate] = useState<ParsedDate>({
        adDate: new Date(),
        bsDay: 0,
        bsMonth: 0,
        bsYear: 0,
        firstAdDayInBSMonth: new Date(),
        numberOfDaysInBSMonth: 0,
        weekDay: 0,
    })

    const weeksInMonth = useMemo(
        () => Math.ceil((date.firstAdDayInBSMonth.getDay() + date.numberOfDaysInBSMonth) / 7),
        [date],
    )
    const previousMonth = useMemo(() => (date.bsMonth - 1 !== 0 ? date.bsMonth - 1 : 12), [date])
    const previousYear = useMemo(() => (previousMonth === 12 ? date.bsYear - 1 : date.bsYear), [date])
    const previousMonthDays = useMemo(
        () =>
            previousYear >= minBSYear
                ? getNumberOfDaysInBSMonth({
                      month: previousMonth,
                      year: previousYear,
                  })
                : 30,
        [],
    )

    useEffect(() => {
        setDate(getConfig<ParsedDate>("selectedDate"))
    }, [])

    const dayInfo = useCallback(
        (weekNum, weekDayNum) => {
            let calenderDate = weekNum * 7 + weekDayNum - date.firstAdDayInBSMonth.getDay()
            let isCurrentMonth = true

            if (calenderDate <= 0) {
                calenderDate = previousMonthDays + calenderDate
                isCurrentMonth = false
            } else if (calenderDate > date.numberOfDaysInBSMonth) {
                calenderDate = calenderDate - date.numberOfDaysInBSMonth
                isCurrentMonth = false
            }

            const today = splitDate(ADToBS(new Date()))
            // tslint:disable-next-line:no-console
            console.log(today)

            const isToday = isCurrentMonth
                ? today.day === calenderDate && today.month === date.bsMonth && today.year === date.bsYear
                : false
            const isSelected = isCurrentMonth
                ? date.bsDay === calenderDate && today.month === date.bsMonth && today.year === date.bsYear
                : false

            return { calenderDate, isCurrentMonth, isToday, isSelected }
        },
        [date],
    )

    return (
        <tbody>
            {range(0, weeksInMonth).map(weekNum => (
                <tr key={weekNum}>
                    {range(1, 7).map(weekDayNum => {
                        const day = dayInfo(weekNum, weekDayNum)

                        return (
                            <td
                                key={weekDayNum}
                                className={`month-day ${day.isCurrentMonth ? "current" : "previous"} ${
                                    day.isToday ? "today" : ""
                                } ${day.isSelected ? "selected" : ""}`}
                            >
                                {day.calenderDate}
                            </td>
                        )
                    })}
                </tr>
            ))}
        </tbody>
    )
}

export default DayPickerBody
