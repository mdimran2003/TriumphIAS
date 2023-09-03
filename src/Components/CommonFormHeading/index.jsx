import React from "react";
import Styles from "./index.module.scss";
const CommonFormHeading = ({ text }) => {
  return <div className={Styles.headingArea}>{text}</div>;
};

export default CommonFormHeading;
