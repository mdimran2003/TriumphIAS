import React from 'react'
import Styles from "./index.module.scss"

const CommanHeading = (props) => {
    return (
        <div className={Styles.features}>
            <h3>{props.heading} &nbsp; <b>{props.highlight}</b></h3>
        </div>
    )
}

export default CommanHeading;
