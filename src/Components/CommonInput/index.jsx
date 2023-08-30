import React from "react";
import Styles from "./index.module.scss";
const CommonInput = ({ type, placeHolder }) => {
  return (
    <div className={Styles.inputArea}>
      <input type={type} placeholder={placeHolder} />
    </div>
  );
};

export default CommonInput;
