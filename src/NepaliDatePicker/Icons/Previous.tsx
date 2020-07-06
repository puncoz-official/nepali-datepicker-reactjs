import React, { FunctionComponent } from "react"
import IconBase, { IconBaseProps } from "./IconBase"

const Previous: FunctionComponent<IconBaseProps> = (props) => (
    <IconBase {...props}>
        <path
            fill='none'
            fillRule='evenodd'
            stroke='currentcolor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2.4'
            d='M16.283 18.907L9.6 12l6.683-5.438'
        />
    </IconBase>
)

export default Previous
