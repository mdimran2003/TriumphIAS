import React from "react";
import Styles from "./index.module.scss";
import CommonPurpleButton from "../CommonButton";
const GuidSection = () => {
  return (
    <div className={Styles.guidArea}>
      <p>Want to talk to a guide before starting your prepration? </p>
      <CommonPurpleButton text="Call @ +91 7840888102" />
    </div>
  );
};

export default GuidSection;
