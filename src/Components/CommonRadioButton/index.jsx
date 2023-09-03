import React from "react";
import Styles from "./index.module.scss";
const CommonRadioButton = ({ name, backgroundColor, label }) => {
  return (
    <div style={{ backgroundColor: `${backgroundColor}` }} className={Styles.btnArea}>
      <input type="radio" name={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CommonRadioButton;
