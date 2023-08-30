import React from 'react'
import Styles from './index.module.scss'

const Item = (props) => {
    return (
        <ul className={Styles.list}>
            <li className={Styles.list__li}>{props.para}</li>
        </ul>
    )
}

export default Item;