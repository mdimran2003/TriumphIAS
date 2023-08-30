import React from "react";
import Styles from "./index.module.scss";
const CommonTittle = ({ text, colorText, rightText }) => {
  return (
    <div className={Styles.titlleArea}>
      <p>
        {text} <span>{colorText}</span>
        <span> </span>
        {rightText}
      </p>
    </div>
  );
};

export default CommonTittle;
