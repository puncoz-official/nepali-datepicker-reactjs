import React, { FunctionComponent } from "react"
import logo from "./../logo.svg"

const Header: FunctionComponent = () => (
    <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src={logo} alt="nepali-date-picker" width="72" height="72" />
        <h2>Nepali DatePicker</h2>
        <p className="lead">Nepali Datepicker (Bikram Sambat) as a ReactJS component</p>
    </div>
)

export default Header
