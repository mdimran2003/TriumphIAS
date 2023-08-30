import React from "react";
import { isMobile } from "react-device-detect";
import Styles from "./index.module.scss";
import CommonInput from "../CommonInput";
import CommonSelectField from "../CommomSelectField";
import CommonPurpleButton from "../CommonButton";
import contactImg from "../../Assets/Phone Icon.png";
import youtube from "../../Assets/Youtube icon.png";
import telegram from "../../Assets/Telegram Icon.png";
import instagram from "../../Assets/Instagram Icon.png";
import facebook from "../../Assets/Facebook Icon.png";
const ContactSection = () => {
  if (isMobile) {
    return (
      <div className={Styles.contactArea}>
        <div className={Styles.contactArea__contactDetail}>
          <h3>Do You Have Any Still Queries?</h3>
          <p>Conatct us and we will help you out to take the right decision for you</p>
          <div className={Styles.contactArea__formArea}>
            <CommonInput type="text" placeHolder="Enter your Full Name" />
            <CommonInput type="number" placeHolder="Enter your Phone Number" />
            <CommonSelectField />
            <CommonPurpleButton text="SUBMIT" />
          </div>
        </div>
        <div>
          {" "}
          <div className={Styles.contactArea__contactDetail__contactHeader}>
            <div className={Styles.contactArea__contactDetail__contactHeader__contactImg}>
              <img src={contactImg} alt="error" />
            </div>
            <div className={Styles.contactArea__contactDetail__contactHeader__contactNumber}>
              <p>+91 7678628820 , +91 7840888102</p>
              <p>+91 7678628820 , +91 7840888102</p>
            </div>
          </div>
          <div className={Styles.contactArea__contactDetail__contactWithOnline}>
            <span>
              <img src={youtube} alt="error" />
            </span>
            <span>
              <img src={telegram} alt="error" />
            </span>
            <span>
              <img src={instagram} alt="error" />
            </span>
            <span>
              <img src={facebook} alt="error" />
            </span>
            <h2>Triumphias</h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={Styles.contactArea}>
      <div className={Styles.contactArea__contactDetail}>
        <h3>Do You Have Any Still Queries?</h3>
        <p>Conatct us and we will help you out to take the right decision for you</p>
        <div className={Styles.contactArea__contactDetail__contactHeader}>
          <div className={Styles.contactArea__contactDetail__contactHeader__contactImg}>
            <img src={contactImg} alt="error" />
          </div>
          <div className={Styles.contactArea__contactDetail__contactHeader__contactNumber}>
            <p>+91 7678628820 , +91 7840888102</p>
            <p>+91 7678628820 , +91 7840888102</p>
          </div>
        </div>
        <div className={Styles.contactArea__contactDetail__contactWithOnline}>
          <span>
            <img src={youtube} alt="error" />
          </span>
          <span>
            <img src={telegram} alt="error" />
          </span>
          <span>
            <img src={instagram} alt="error" />
          </span>
          <span>
            <img src={facebook} alt="error" />
          </span>
          <h2>Triumphias</h2>
        </div>
      </div>
      <div className={Styles.contactArea__formArea}>
        <CommonInput type="text" placeHolder="Enter your Full Name" />
        <CommonInput type="number" placeHolder="Enter your Phone Number" />
        <CommonSelectField />
        <CommonPurpleButton text="SUBMIT" />
      </div>
    </div>
  );
};

export default ContactSection;
