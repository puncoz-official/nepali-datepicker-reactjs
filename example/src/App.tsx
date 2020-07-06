import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import React, { FunctionComponent, useState } from "react"
import "./app.scss"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App: FunctionComponent = () => {
    const [dateEnglish, setDateEnglish] = useState<string>("2077-03-15")
    const [dateNepali, setDateNepali] = useState<string>("")

    return (
        <div className="container">
            <Header />

            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="start-date">Date <small>Selected: {dateEnglish}</small></label>
                                <NepaliDatePicker inputClassName="form-control"
                                                  value={dateEnglish}
                                                  onChange={(date: string) => setDateEnglish(date)}
                                                  options={{ calenderLocale: "en" }} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="end-date">मिति <small>Selected: {dateNepali}</small></label>
                                <NepaliDatePicker inputClassName="form-control"
                                                  value={dateNepali}
                                                  onChange={(date: string) => setDateNepali(date)}
                                                  options={{ valueLocale: "en" }} />
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
