import React, { FunctionComponent } from "react"
import IconBase, { IconBaseProps } from "./IconBase"

const Today: FunctionComponent<IconBaseProps> = (props) => {
    props = { ...props, viewBoxSize: "512", size: "15" }

    return (
        <IconBase {...props}>
            <defs>
                <path
                    id='a'
                    d='M468 160H44c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM44 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z'
                />
            </defs>

            <g fill='none' fillRule='evenodd'>
                <mask id='b' fill='#fff'>
                    <use xlinkHref='#a' />
                </mask>
                <use fill='#000' fillRule='nonzero' xlinkHref='#a' />
                <g fill='currentcolor' mask='url(#b)'>
                    <path d='M0 0h512v512H0z' />
                </g>
            </g>
        </IconBase>
    )
}

export default Today
