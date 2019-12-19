import React, { useMemo } from "react"
import { weeks } from "../../../../../Helpers/CalenderData"
import { useConfig } from "../../../../Config"

const DayPickerHeader = () => {
    const { getConfig } = useConfig()
    const currentLocale: string = useMemo(() => getConfig("locale"), [getConfig])

    return (
        <thead>
            <tr>
                {weeks[currentLocale].map((weekDay: string, index: number) => (
                    <td key={index}>{weekDay}</td>
                ))}
            </tr>
        </thead>
    )
}

export default DayPickerHeader
