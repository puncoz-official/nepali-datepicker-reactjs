import React, { FunctionComponent } from "react"

export interface IconBaseProps {
    size?: string
    viewBoxSize?: string
    className?: string
    color?: string
}

const IconBase: FunctionComponent<IconBaseProps> = (props) => {
    const { size, viewBoxSize, ...options } = props

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width={props.size}
            height={props.size}
            {...options}
            viewBox={`0 0 ${props.viewBoxSize} ${props.viewBoxSize}`}
        >
            {props.children}
        </svg>
    )
}

IconBase.defaultProps = {
    color: "#6b6b6b",
    size: "16",
    viewBoxSize: "24",
}

export default IconBase
