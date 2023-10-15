import "@/styles/normalize.css"
import "@/styles/tailwind.css"

import React, { FunctionComponent } from "react"

import { Calendar, DateInput, Wrapper } from "@/components"
import { DataProvider } from "@/components/data/provider.tsx"
import { omitKeys } from "@/utils"
import { INepaliDatePicker, INepaliDatePickerKeys } from "#/NepaliDatePicker.ts"

const NepaliDatePicker: FunctionComponent<INepaliDatePicker> = (props) => {
  const inputProps = omitKeys(INepaliDatePickerKeys, props)

  return (
    <DataProvider {...props}>
      <Wrapper input={<DateInput {...inputProps} />} calendar={<Calendar />} />
    </DataProvider>
  )
}

export default NepaliDatePicker
