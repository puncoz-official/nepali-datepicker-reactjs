import { DateType, SplitDate } from "#/Data.ts"

import { useData } from "./useData.ts"

export const useDateValidator = () => {
  const { state } = useData()
  const validateInputDate = (date: string, separator?: string): void => {
    const dateSeparator = separator || state.options.dateSeparator
    const datePattern = `^[0-9]{4}${dateSeparator}(0?[1-9]|1[0-2])${dateSeparator}(0?[1-9]|[1-2][0-9]|3[0-2])$`
    const regex = new RegExp(datePattern)

    if (!date.match(regex)) {
      throw new TypeError(`${date} is invalid date format.`)
    }
  }

  const validateBsYear = (year: number): void => {
    const minBsYear = state.calendarData.minBsYear
    const maxBsYear = state.calendarData.maxBsYear

    if (year < minBsYear || year > maxBsYear) {
      throw new RangeError(`Date between ${minBsYear} BS to ${maxBsYear} BS is only supported.`)
    }
  }

  const validateBsMonth = (month: number): void => {
    if (month < 1 || month > 12) {
      throw new RangeError("BS month should be in range of 1 to 12")
    }
  }

  const validateBsDay = (day: number): void => {
    if (day < 1 || day > 32) {
      throw new RangeError("BS day should be in range of 1 to 32")
    }
  }

  const validateAdYear = (year: number): void => {
    const minAdYear = state.calendarData.minBsYear - 57
    const maxAdYear = state.calendarData.maxBsYear - 57

    if (year < minAdYear || year > maxAdYear) {
      throw new RangeError(`Date between ${minAdYear} AD to ${maxAdYear} AD is only supported.`)
    }
  }

  const validateAdMonth = (month: number): void => {
    if (month < 1 || month > 12) {
      throw new RangeError("AD month should be in range of 1 to 12")
    }
  }

  const validateAdDay = (day: number): void => {
    if (day < 1 || day > 31) {
      throw new RangeError("AD day should be in range of 1 to 31")
    }
  }

  const validateDateObject = (date: SplitDate, type: DateType = DateType.BS): void => {
    const { year, month, day } = date

    if (type === DateType.BS) {
      validateBsYear(year)
      validateBsMonth(month)
      validateBsDay(day)

      return
    }

    validateAdYear(year)
    validateAdMonth(month)
    validateAdDay(day)
  }

  return {
    validateInputDate,
    validateDateObject,
    validateBsYear,
    validateAdYear,
    validateBsMonth,
    validateAdMonth,
    validateBsDay,
    validateAdDay,
  }
}
