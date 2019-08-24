import React                from "react"
import { NepaliDatePicker } from "../.."
import "./app.scss"
import Footer               from "./components/Footer"
import Header               from "./components/Header"

const App = () => {
    return (
        <div className="container">
            <Header/>

            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="start-date">Start Date</label>
                                <NepaliDatePicker className="form-control"/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="end-date">End Date</label>
                                <NepaliDatePicker className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <Footer/>
        </div>
    )
}

export default App
