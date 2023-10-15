import React, { FunctionComponent, useEffect } from "react"

import { Calendar, DateInput, useData } from "@/components"
import FloatingContainer from "@/components/wrapper/floating-container.tsx"
import { Theme, Types } from "#/Data.ts"
import { INepaliDatePicker } from "#/NepaliDatePicker.ts"

interface Props extends INepaliDatePicker {
}

const Wrapper: FunctionComponent<Props> = ({ ...props }) => {
  const { state, setData } = useData()

  useEffect(() => {
    setData({ type: Types.SET_VALUE, value: props.value || "" })
  }, [props.value])

  useEffect(() => {
    setData({
      type: Types.SET_CLASSES,
      classNames: {
        wrapper: props.wrapperClassName,
        input: props.className,
      },
    })
  }, [props.className, props.wrapperClassName])

  useEffect(() => {
    setData({
      type: Types.SET_THEME,
      theme: props.dark ? Theme.DARK : Theme.LIGHT,
    })
  }, [props.dark])

  useEffect(() => {
    setData({
      type: Types.SET_EVENTS,
      events: {
        onChange: props.onChange || undefined,
        onSelect: props.onSelect || undefined,
      },
    })
  }, [props.onChange, props.onSelect])

  return (
    <div className={`nepali-datepicker ${state.classNames.wrapper || ""}`} data-theme={state.theme}>
      <FloatingContainer input={<DateInput {...props} />} calendar={<Calendar />} />
    </div>
  )
}
export default Wrapper
