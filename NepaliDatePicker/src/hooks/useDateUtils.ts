import { BSToAD } from "bikram-sambat-js"

import { ParsedDate, SplitDate } from "#/Data.ts"

import { useCommon } from "./useCommon.ts"
import { useData } from "./useData.ts"
import { useDateValidator } from "./useDateValidator.ts"

export const useDateUtils = () => {
  const dateValidator = useDateValidator()
  const common = useCommon()
  const { state } = useData()

  const splitDate = (date: string, separator?: string): SplitDate => {
    dateValidator.validateInputDate(date, separator)
    const [year, month, day] = date.split(separator || state.options.dateSeparator)

    return {
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
    }
  }

  const stitchDate = (date: SplitDate, separator?: string): string => {
    const dateSep = separator || state.options.dateSeparator

    return `${date.year}${dateSep}${common.zeroPad(date.month)}${dateSep}${common.zeroPad(date.day)}`
  }

  const getNumberOfDaysInBSMonth = (year: number, month: number): number => {
    dateValidator.validateBsYear(year)
    dateValidator.validateBsMonth(month)

    let yearCount = 0
    const totalYears = year + 1 - state.calendarData.minBsYear
    const bsMonthData: number[] = state.calendarData.bsMonthCalculatedData[month - 1]

    return bsMonthData.reduce((numberOfDays: number, monthData: number, index: number) => {
      if (monthData === 0 || numberOfDays !== 0) {
        return numberOfDays
      }

      const bsMonthUpperDaysIndex = index % 2
      yearCount += monthData
      if (totalYears > yearCount) {
        return numberOfDays
      }

      if ((year === 2085 && month === 5) || (year === 2088 && month === 5)) {
        return state.calendarData.bsMonthMaxDays[month - 1][bsMonthUpperDaysIndex] - 2
      }

      return state.calendarData.bsMonthMaxDays[month - 1][bsMonthUpperDaysIndex]
    }, 0)
  }

  const parseBsDate = (date: string, separator?: string): ParsedDate => {
    const { year, month, day } = splitDate(date, separator)

    dateValidator.validateDateObject({ year, month, day })

    const firstDayInBs = stitchDate({ year, month, day: 1 })
    const firstDayInAd = BSToAD(firstDayInBs)
    const firstAdDayInBsMonth = new Date(firstDayInAd)

    const numberOfDaysInBsMonth = getNumberOfDaysInBSMonth(year, month)

    const adDate = new Date(BSToAD(date))

    return {
      bsDay: day,
      bsMonth: month,
      bsYear: year,
      weekDay: adDate.getDay(),
      adDate,
      firstAdDayInBsMonth,
      numberOfDaysInBsMonth,
      dateString: date,
    }
  }

  return {
    splitDate,
    stitchDate,
    parseBsDate,
    getNumberOfDaysInBSMonth,
  }
}
