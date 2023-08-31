import React from "react";
import Styles from "./index.module.scss";
const CommonTittle = ({ text, colorText, rightText, fontFamily }) => {
  return (
    <div className={Styles.titlleArea}>
      <p style={{ fontFamily: `${fontFamily}` }}>
        {text} <span>{colorText}</span>
        <span> </span>
        {rightText}
      </p>
    </div>
  );
};

export default CommonTittle;
