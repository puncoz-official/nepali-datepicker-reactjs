import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import React, { useState }  from "react"
import "./app.scss"
import Footer               from "./components/Footer"
import Header               from "./components/Header"

const App = () => {
    const [dateEnglish, setDateEnglish] = useState("")
    const [dateNepali, setDateNepali] = useState("")

    return (
        <div className="container">
            <Header />

            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="start-date">Date</label>
                                <NepaliDatePicker className="form-control"
                                                  value={dateEnglish}
                                                  onChange={(date) => setDateEnglish(date)}
                                                  options={{ calenderLocale: "en" }} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="end-date">मिति</label>
                                <NepaliDatePicker className="form-control"
                                                  value={dateNepali}
                                                  onChange={(date) => setDateNepali(date)}
                                                  options={{ valueLocale: "ne" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <Footer />
        </div>
    )
}

export default App
