import React from 'react'
import Styles from "./index.module.scss"

const CommonNavList = (props) => {
  return (
    <li className={Styles.nav}>
{props.list}<i className="fa-solid fa-angle-right"></i>
    </li>
  )
}

export default CommonNavList
