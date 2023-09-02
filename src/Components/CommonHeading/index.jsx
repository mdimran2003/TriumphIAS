import React from "react";
import Styles from "./index.module.scss";
const CommonHeading = ({ text, colorText, rightText, styles }) => {
  return (
    <div className={Styles.headingArea}>
      <p className={styles}>
        {text} <span>{colorText}</span> {rightText}
      </p>
    </div>
  );
};

export default CommonHeading;
