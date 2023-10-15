import "@/styles/normalize.css"
import "@/styles/tailwind.css"

import React, { FunctionComponent, HTMLProps } from "react"

import { Wrapper } from "@/components"
import { DataProvider } from "@/components/data/provider.tsx"
import { INepaliDatePicker } from "#/NepaliDatePicker.ts"

const NepaliDatePicker: FunctionComponent<INepaliDatePicker | HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <DataProvider>
      <Wrapper {...props} />
    </DataProvider>
  )
}

export default NepaliDatePicker
