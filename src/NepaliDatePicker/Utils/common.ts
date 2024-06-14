import { BSToAD } from "bikram-sambat-js"
import { CalenderData } from "../Config"
import { BS, ParsedDate, SplittedDate, voidFunction } from "../Types"
import {
    validateAdDay,
    validateAdMonth,
    validateAdYear,
    validateBsDay,
    validateBsMonth,
    validateBsYear,
} from "./DateValidations"

export const range = (start: number, end: number, step: number = 1): number[] => {
    const list = []

    for (let i = start; i <= end; i = i + step) {
        list.push(i)
    }

    return list
}

export const zeroPad = (num: number): string => `${num > 9 ? num : "0" + num}`

export const executionDelegation = (execution: voidFunction, delegatedExecution: voidFunction) => {
    new Promise((resolve) => {
        execution()
        resolve()
    }).then(() => {
        delegatedExecution()
    })
}

export const splitDate = (date: string, separator: string = "-"): SplittedDate => {
    const [year, month, day] = date.split(separator)

    return {
        day: parseInt(day, 10),
        month: parseInt(month, 10),
        year: parseInt(year, 10),
    }
}

export const stitchDate = (date: SplittedDate, separator: string = "-"): string => {
    return `${date.year}${separator}${zeroPad(date.month)}${separator}${zeroPad(date.day)}`
}

export const validateDateObject = (date: SplittedDate, type: string = BS) => {
    const { year, month, day } = date

    if (type === BS) {
        validateBsYear(year)
        validateBsMonth(month)
        validateBsDay(day)

        return
    }

    validateAdYear(year)
    validateAdMonth(month)
    validateAdDay(day)
}

export const getNumberOfDaysInBSMonth = (yearMonth: { year: number; month: number }): number => {
    const { year, month } = yearMonth
    validateBsYear(year)
    validateBsMonth(month)

    let yearCount = 0
    const totalYears = year + 1 - CalenderData.minBSYear
    const bsMonthData: number[] = CalenderData.bsMonthCalculatedData[month - 1]

    return bsMonthData.reduce((numberOfDays: number, monthData: number, index: number) => {
        if (monthData === 0 || numberOfDays !== 0) {
            return numberOfDays
        }

        const bsMonthUpperDaysIndex = index % 2
        yearCount += monthData
        if (totalYears > yearCount) {
            return numberOfDays
        }

        if (year === 2081 && month === 2) {
            return CalenderData.bsMonthMaxDays[month - 1][bsMonthUpperDaysIndex + 1]
        }

        if (year === 2081 && month === 3) {
            return CalenderData.bsMonthMaxDays[month - 1][bsMonthUpperDaysIndex - 1]
        }

        if (year === 2081 && month === 11) {
            return CalenderData.bsMonthMaxDays[month - 1][bsMonthUpperDaysIndex] - 1
        }

        if (year === 2081 && month === 12) {
            return CalenderData.bsMonthMaxDays[month - 1][bsMonthUpperDaysIndex] + 1
        }

        if ((year === 2085 && month === 5) || (year === 2088 && month === 5)) {
            return CalenderData.bsMonthMaxDays[month - 1][bsMonthUpperDaysIndex] - 2
        }

        return CalenderData.bsMonthMaxDays[month - 1][bsMonthUpperDaysIndex]
    }, 0)
}

export const parseBSDate = (date: string, separator: string = "-"): ParsedDate => {
    const { year, month, day }: SplittedDate = splitDate(date, separator)

    validateDateObject({ year, month, day })

    const adDate = new Date(BSToAD(date))
    const firstAdDateInBSMonth = new Date(BSToAD(stitchDate({ year, month, day: 1 }, separator)))
    const numberOfDaysInMonth = getNumberOfDaysInBSMonth({ year, month })

    return {
        adDate,
        bsDay: day,
        bsMonth: month,
        bsYear: year,
        firstAdDayInBSMonth: firstAdDateInBSMonth,
        numberOfDaysInBSMonth: numberOfDaysInMonth,
        weekDay: adDate.getDay(),
    }
}

export const childOf = (childNode: any, parentNode: any): boolean => parentNode.contains(childNode)
