import React, { FunctionComponent, useCallback, useMemo } from "react"

import { useData, useTrans } from "@/components"
import { DropDown, Option } from "@/components/dropdown"
import { range } from "@/utils"

const YearPicker: FunctionComponent = () => {
  const { state } = useData()
  const { numberTrans, trans } = useTrans()

  const yearList = useMemo<Option[]>(() => {
    return range(state.config.minYear, state.config.maxYear)
      .reverse()
      .map((year) => ({
        label: numberTrans(year),
        value: year,
      }))
  }, [])

  const handleOnSelect = useCallback((year: Option) => {
    console.log(year)
  }, [])

  return (
    <DropDown options={yearList}
              value={2080}
              onSelect={handleOnSelect}
              className="ndp-border-y ndp-border-l ndp-rounded-l-sm"
              dropdownClass="ndp-rounded-l-sm ndp-rounded-br-sm"
              title={trans("labels.select-year")} />
  )
}

export default YearPicker
