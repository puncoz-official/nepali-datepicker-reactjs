import React, { FunctionComponent } from "react"
import CalenderController from "./CalenderController"

const Calender: FunctionComponent = () => {
    const weekDays = {
        "en": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "ne": ["आईत", "सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनि"],
    }

    return (
        <div className="nepali-date-picker">
            <CalenderController/>

            <table>
                <thead>
                    <tr>
                        {weekDays["ne"].map((weekDay, index) => (
                            <td key={index   }>{weekDay}</td>
                        ))}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Calender
