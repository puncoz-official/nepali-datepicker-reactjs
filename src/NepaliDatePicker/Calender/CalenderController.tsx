import React, { FunctionComponent } from "react"
import { Next, Previous, Today } from "../Icons"

const CalenderController: FunctionComponent = () => {
    const months = {
        "en": ["Baisakh", "Jestha", "Asar", "Shrawan", "Bhadra", "Asoj", "Kartik", "Mangsir", "Pouse", "Magh", "Falgun", "Chaitra"],
        "ne": ["बैशाख", "जेठ", "असार", "सावन", "भदौ", "असोज", "कार्तिक", "मंसिर", "पौष", "माघ", "फागुन", "चैत"],
    }

    return (
        <div className="calendar-controller">
            <span className="control icon" title="prev">
                <Previous/>
            </span>
            <span className="control icon" title="today">
                <Today/>
            </span>

            <span className="control month">{months["ne"][0]}</span>
            <span className="control year">2075</span>

            <span className="control icon" title="next">
                <Next/>
            </span>
        </div>
    )
}

export default CalenderController
