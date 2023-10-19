import React, { FunctionComponent, useCallback, useMemo } from "react"

import { useTrans } from "@/components"
import { DropDown, Option } from "@/components/dropdown"
import { Months } from "#/Translations.ts"

const MonthPicker: FunctionComponent = () => {
  const { trans } = useTrans()

  const monthList = useMemo<Option[]>(() => {
    return Months.map((month, index) => ({
      label: trans(`months.${month}`),
      value: index,
    }))
  }, [])

  const handleOnSelect = useCallback((month: Option) => {
    console.log(month)
  }, [])

  return (
    <DropDown options={monthList}
              value={6}
              onSelect={handleOnSelect}
              className="ndp-border ndp-rounded-r-sm ndp-w-20 ndp-justify-center"
              dropdownClass="ndp-rounded-r-sm ndp-rounded-bl-sm"
              title={trans("labels.select-month")} />
  )
}

export default MonthPicker
