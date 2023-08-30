import React from "react";
import Styles from "./index.module.scss";
import CommonInput from "../CommonInput";
import CommonPurpleButton from "../CommonButton";
const OTPSection = () => {
  return (
    <div className={Styles.otpArea}>
      <h3>Get Started with Triumph IAS</h3>
      <CommonInput type="text" placeHolder="Enter Phone Number" />
      <p>An OTP will be Sent for Verification</p>
      <CommonPurpleButton text="Continue" />
    </div>
  );
};

export default OTPSection;
