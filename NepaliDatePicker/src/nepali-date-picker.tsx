import "@/styles/normalize.css"
import "@/styles/tailwind.css"

import React, { FunctionComponent } from "react"

import { Wrapper } from "@/components"
import { DataProvider } from "@/components/data/provider.tsx"
import { INepaliDatePicker } from "#/NepaliDatePicker.ts"

const NepaliDatePicker: FunctionComponent<INepaliDatePicker> = (props) => {
  return (
    <DataProvider>
      <Wrapper {...props} />
    </DataProvider>
  )
}

export default NepaliDatePicker
