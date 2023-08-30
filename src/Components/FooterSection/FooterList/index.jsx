import React from "react";
import Styles from "./index.module.scss";
const FooterList = ({ li1, li2, li3, li4, li5 }) => {
  return (
    <div className={Styles.listArea}>
      <ul>
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
        <li>{li5}</li>
      </ul>
    </div>
  );
};

export default FooterList;
