import React, { FunctionComponent, useMemo } from "react"
import { CalenderData, useConfig } from "../../../Config"

const DayPickerHeader: FunctionComponent = () => {
    const { getConfig } = useConfig()
    const currentLocale: string = useMemo(() => getConfig("currentLocale"), [getConfig])

    return (
        <thead>
            <tr>
                {CalenderData.weeks[currentLocale].map((weekDay: string, index: number) => (
                    <td key={index}>{weekDay}</td>
                ))}
            </tr>
        </thead>
    )
}

export default DayPickerHeader
