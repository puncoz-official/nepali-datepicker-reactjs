import { ADToBS } from "bikram-sambat-js"
import { nepaliToEnglishNumber } from "nepali-number"
import React, { CSSProperties, FunctionComponent, useEffect } from "react"

import { Calendar, DateInput } from "@/components"
import { useData, useDateUtils } from "@/hooks"
import { Language, Theme, Types } from "#/Data.ts"
import { INepaliDatePicker } from "#/NepaliDatePicker.ts"

import FloatingContainer from "./floating-container.tsx"

type Props = INepaliDatePicker

const Wrapper: FunctionComponent<Props> = ({ ...props }) => {
  const { state, setData } = useData()
  const { parseBsDate } = useDateUtils()

  useEffect(() => {
    setData({
      type: Types.SET_CLASSES,
      classNames: {
        input: props.className ?? state.options.classNames.input,
        ...props.options?.classNames,
      },
    })
  }, [props.className, props.options?.classNames])

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
        onChange: props.onChange ?? state.events.onChange,
        onSelect: props.onSelect ?? state.events.onSelect,
      },
    })
  }, [props.onChange, props.onSelect])

  useEffect(() => {
    setData({
      type: Types.SET_LOCALE,
      locale: {
        calendar: (props.options?.locale ?? state.locale.calendar) as Language,
        value: (props.options?.valueLocale ?? state.locale.value) as Language,
      },
    })
  }, [props.options?.locale, props.options?.valueLocale])

  useEffect(() => {
    setData({
      type: Types.SET_COLORS,
      colors: { ...state.options.colors, ...props.options?.colors },
    })
  }, [props.options?.colors])

  useEffect(() => {
    setData({
      type: Types.SET_SEPARATOR,
      separator: props.options?.dateSeparator ?? state.options.dateSeparator,
    })
  }, [props.options?.dateSeparator])

  useEffect(() => {
    setData({
      type: Types.SET_CLOSE_ON_SELECT,
      closeOnSelect: typeof props.options?.closeOnSelect === "undefined" ? state.options.closeOnSelect : props.options.closeOnSelect,
    })
  }, [props.options?.closeOnSelect])

  useEffect(() => {
    const value = nepaliToEnglishNumber(props.value ?? "")
    const selectedDate = value ? parseBsDate(value) : undefined
    const calendarDate = parseBsDate(value || ADToBS(new Date()))

    setData({ type: Types.SET_CALENDAR_DATE, date: calendarDate })
    setData({ type: Types.SET_SELECTED_DATE, date: selectedDate })
  }, [props.value])

  return (
    <div className={`nepali-datepicker ${state.options.classNames.wrapper ?? ""}`}
         data-theme={state.options.theme}
         style={{
           "--ndp-primary": state.options.colors.primary,
           "--ndp-secondary": state.options.colors.secondary,
         } as CSSProperties}>
      <FloatingContainer input={<DateInput {...props} />} calendar={<Calendar />} />
    </div>
  )
}
export default Wrapper
