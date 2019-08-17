import * as React from 'react'

export type Props = { name: string }

export default class ExampleComponent extends React.Component<Props> {
    render() {
        const { name } = this.props

        return (
            <div style={{ color: 'red' }}>
                Hello {name}!
            </div>
        )
    }
}
