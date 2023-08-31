import React from "react";
import Styles from "./index.module.scss";
const CommonHeading = ({ text, colorText, rightText, fontSize, marginBottom }) => {
  return (
    <div className={Styles.headingArea}>
      <p style={{ fontSize: `${fontSize}`, marginBottom: `${marginBottom}` }}>
        {text} <span>{colorText}</span> {rightText}
      </p>
    </div>
  );
};

export default CommonHeading;
