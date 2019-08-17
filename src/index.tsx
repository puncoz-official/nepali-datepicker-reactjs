import React, { Component } from "react"

interface IProps {
    name: string
}

export default class DatePicker extends Component<IProps> {
    public render() {
        const { name } = this.props

        return <div style={{ color: "red" }}>Hello {name}!</div>
    }
}
