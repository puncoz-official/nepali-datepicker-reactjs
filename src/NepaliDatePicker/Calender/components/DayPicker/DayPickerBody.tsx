import { ADToBS } from "bikram-sambat-js"
import React, { FunctionComponent, useCallback, useMemo } from "react"
import { CalenderData, useConfig } from "../../../Config"
import { useTrans } from "../../../Locale"
import { localeType, ParsedDate, SplittedDate } from "../../../Types"
import { getNumberOfDaysInBSMonth, range, splitDate } from "../../../Utils/common"

interface DayPickerBodyProps {
    selectedDate: ParsedDate | null
    calenderDate: ParsedDate
    onSelect: (date: SplittedDate) => void
}

interface DayInfo {
    day: number
    month: number
    year: number
    isCurrentMonth: boolean
    isToday: boolean
    isSelected: boolean
    isOutOfRange: boolean
}

// Lexicographic year/month/day comparison; works directly on the BS
// calendar since, like AD, its y/m/d values increase monotonically.
const compareYMD = (a: SplittedDate, b: SplittedDate): number => {
    if (a.year !== b.year) return a.year - b.year
    if (a.month !== b.month) return a.month - b.month
    return a.day - b.day
}

const DayPickerBody: FunctionComponent<DayPickerBodyProps> = ({ selectedDate, calenderDate: date, onSelect }) => {
    const weeksInMonth = useMemo(
        () => Math.ceil((date.firstAdDayInBSMonth.getDay() + date.numberOfDaysInBSMonth) / 7) - 1,
        [date],
    )
    const previousMonth = useMemo(() => (date.bsMonth - 1 !== 0 ? date.bsMonth - 1 : 12), [date])
    const previousYear = useMemo(() => (previousMonth === 12 ? date.bsYear - 1 : date.bsYear), [previousMonth, date])
    const previousMonthDays = useMemo(
        () =>
            previousYear >= CalenderData.minBSYear
                ? getNumberOfDaysInBSMonth({
                      month: previousMonth,
                      year: previousYear,
                  })
                : 30,
        [previousYear],
    )

    const { getConfig } = useConfig()
    const { numberTrans } = useTrans(getConfig<localeType>("currentLocale"))
    const minDateBS = getConfig<SplittedDate | null>("minDateBS")
    const maxDateBS = getConfig<SplittedDate | null>("maxDateBS")

    const getDayInfo = useCallback(
        (weekNum, weekDayNum): DayInfo => {
            let day = weekNum * 7 + weekDayNum - date.firstAdDayInBSMonth.getDay()
            const month = date.bsMonth
            const year = date.bsYear

            let isCurrentMonth = true

            if (day <= 0) {
                day = previousMonthDays + day
                isCurrentMonth = false
            } else if (day > date.numberOfDaysInBSMonth) {
                day = day - date.numberOfDaysInBSMonth
                isCurrentMonth = false
            }

            const today = splitDate(ADToBS(new Date()))

            const isToday = isCurrentMonth
                ? today.day === day && today.month === date.bsMonth && today.year === date.bsYear
                : false
            const isSelected =
                selectedDate && isCurrentMonth
                    ? selectedDate.bsDay === day &&
                      selectedDate.bsMonth === date.bsMonth &&
                      selectedDate.bsYear === date.bsYear
                    : false

            const cellDate: SplittedDate = { year, month, day }
            const isOutOfRange =
                (!!minDateBS && compareYMD(cellDate, minDateBS) < 0) ||
                (!!maxDateBS && compareYMD(cellDate, maxDateBS) > 0)

            return { day, month, year, isCurrentMonth, isToday, isSelected, isOutOfRange }
        },
        [date, selectedDate, previousMonthDays, minDateBS, maxDateBS],
    )

    const onDateSelectHandler = useCallback(
        (dayInfo: DayInfo) => {
            if (dayInfo.isCurrentMonth && !dayInfo.isOutOfRange) {
                onSelect({ year: dayInfo.year, month: dayInfo.month, day: dayInfo.day })
            }
        },
        [onSelect],
    )

    return (
        <tbody>
            {range(0, weeksInMonth).map((weekNum) => (
                <tr key={weekNum}>
                    {range(1, 7).map((weekDayNum) => {
                        const dayInfo = getDayInfo(weekNum, weekDayNum)
                        const isSelectable = dayInfo.isCurrentMonth && !dayInfo.isOutOfRange

                        return (
                            <td
                                key={weekDayNum}
                                className={`month-day ${
                                    dayInfo.isCurrentMonth && !dayInfo.isOutOfRange ? "current" : "disabled"
                                } ${dayInfo.isToday ? "today" : ""} ${dayInfo.isSelected ? "selected" : ""}`}
                                role={isSelectable ? "button" : undefined}
                                tabIndex={isSelectable ? 0 : undefined}
                                aria-current={dayInfo.isToday ? "date" : undefined}
                                aria-selected={dayInfo.isSelected}
                                aria-disabled={dayInfo.isCurrentMonth && dayInfo.isOutOfRange ? true : undefined}
                                onClick={() => onDateSelectHandler(dayInfo)}
                                onKeyDown={(event) => {
                                    if (isSelectable && (event.key === "Enter" || event.key === " ")) {
                                        event.preventDefault()
                                        onDateSelectHandler(dayInfo)
                                    }
                                }}
                            >
                                {numberTrans(dayInfo.day)}
                            </td>
                        )
                    })}
                </tr>
            ))}
        </tbody>
    )
}

export default DayPickerBody
