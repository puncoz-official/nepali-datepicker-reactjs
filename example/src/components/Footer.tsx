import React from "react"

const Footer = () => (
    <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">
            &copy; 2019-{(new Date()).getFullYear()}{" "}
            <a href="https://github.com/puncoz-official">Puncoz Nepal</a>
        </p>
        <ul className="list-inline">
            <li className="list-inline-item">
                <a href="https://github.com/puncoz-official/nepali-datepicker-reactjs">Github</a>
            </li>
        </ul>
    </footer>
)

export default Footer
