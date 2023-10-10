import React, { FunctionComponent, useMemo } from "react"
import "../NepaliDatePicker.scss"
import { ConfigProvider } from "./Config"
import NepaliDatePicker from "./NepaliDatePicker"
import { ENGLISH, INepaliDatePicker, NEPALI, NepaliDatePickerProps } from "./Types"

const NepaliDatePickerWrapper: FunctionComponent<NepaliDatePickerProps> = (props) => {
    const calenderOptions = useMemo(
        () => ({
            closeOnSelect: true,
            calenderLocale: NEPALI,
            valueLocale: ENGLISH,
            ...props.options,
        }),
        [props.options],
    )

    return (
        <ConfigProvider maxYear={props.maxYear} minYear={props.minYear}>
            <NepaliDatePicker {...({ ...props, options: calenderOptions } as INepaliDatePicker)} />
        </ConfigProvider>
    )
}

NepaliDatePickerWrapper.defaultProps = {
    className: "",
    inputClassName: "",
    value: "",
    onChange: () => null,
    onSelect: () => null,
    options: {},
}

export default NepaliDatePickerWrapper
