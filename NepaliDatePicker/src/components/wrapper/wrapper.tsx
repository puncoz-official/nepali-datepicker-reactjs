import { ADToBS } from "bikram-sambat-js"
import React, { CSSProperties, FunctionComponent, useEffect } from "react"

import { Calendar, DateInput } from "@/components"
import FloatingContainer from "@/components/wrapper/floating-container.tsx"
import { useData, useDateUtils } from "@/hooks"
import { Language, Theme, Types } from "#/Data.ts"
import { INepaliDatePicker } from "#/NepaliDatePicker.ts"

interface Props extends INepaliDatePicker {
}

const Wrapper: FunctionComponent<Props> = ({ ...props }) => {
  const { state, setData } = useData()
  const { parseBsDate } = useDateUtils()

  useEffect(() => {
    setData({ type: Types.SET_VALUE, value: props.value || "" })

    const selectedDate = props.value ? parseBsDate(props.value) : undefined
    const calendarDate = parseBsDate(props.value || ADToBS(new Date()))
    setData({ type: Types.SET_CALENDAR_DATE, date: calendarDate })
    setData({ type: Types.SET_SELECTED_DATE, date: selectedDate })
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
        onChange: props.onChange || state.events.onChange,
        onSelect: props.onSelect || state.events.onSelect,
      },
    })
  }, [props.onChange, props.onSelect])

  useEffect(() => {
    setData({
      type: Types.SET_OPTIONS,
      options: {
        colors: {
          primary: props.options?.colors?.primary || state.options.colors.primary,
          secondary: props.options?.colors?.secondary || state.options.colors.secondary,
        },
        dateSeparator: props.options?.dateSeparator || state.options.dateSeparator,
        currentLocale: (props.options?.locale || state.options.currentLocale) as Language,
        valueLocale: (props.options?.valueLocale || state.options.valueLocale) as Language,
      },
    })
  }, [props.options])

  return (
    <div className={`nepali-datepicker ${state.classNames.wrapper || ""}`}
         data-theme={state.theme}
         style={{
           "--ndp-primary": state.options.colors.primary,
           "--ndp-secondary": state.options.colors.secondary,
         } as CSSProperties}>
      <FloatingContainer input={<DateInput {...props} />} calendar={<Calendar />} />
    </div>
  )
}
export default Wrapper
