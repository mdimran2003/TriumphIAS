import React from "react";
import { isMobile } from "react-device-detect";
import Styles from "./index.module.scss";
import CommonPurpleButton from "../CommonButton";
import OTPSection from "../OTP-Section";
import mobile from "../../Assets/Mobile App.png";
const BannerSection = () => {
  console.log(isMobile);
  if (isMobile) {
    return (
      <div className={Styles.bannerArea}>
        <div className={Styles.bannerArea__tittleArea}>
          <h2>
            join <span>vikash ranjan's</span> free personal mentorship group
          </h2>
          <p>
            Lorem <span>ipsum dolor</span> sit amet consectetur adipisicing elit. Facere eos impedit quo, molestias incidunt doloremque aut
            Facere eos impedit quo
          </p>
          <div className={Styles.bannerArea__ciercelAre}>
            <div className={Styles.bannerArea__ciercelAre__bigImage}>
              <div className={Styles.bannerArea__ciercelAre__bigImage__image}>
                <img src={mobile} alt="error" />
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className={Styles.bannerArea__tittleArea__button}>
            <CommonPurpleButton text="EXPLORE COURSES" />
            <CommonPurpleButton icon={<i className="fa-regular fa-circle-play"></i>} text="WATCH DEMO" />
          </div>
          <OTPSection />
        </div>
      </div>
    );
  }
  return (
    <div className={Styles.bannerArea}>
      <div className={Styles.bannerArea__tittleArea}>
        <h2>
          join <span>vikash ranjan's</span> free personal mentorship group
        </h2>
        <p>
          Lorem <span>ipsum dolor</span> sit amet consectetur adipisicing elit. Facere eos impedit quo, molestias incidunt doloremque aut
          Facere eos impedit quo
        </p>
        <div className={Styles.bannerArea__tittleArea__button}>
          <CommonPurpleButton text="EXPLORE COURSES" />
          <CommonPurpleButton icon={<i className="fa-regular fa-circle-play"></i>} text="WATCH DEMO" />
        </div>
        <OTPSection />
      </div>
      <div className={Styles.bannerArea__ciercelAre}>
        <div className={Styles.bannerArea__ciercelAre__bigImage}>
          <div className={Styles.bannerArea__ciercelAre__bigImage__image}>
            <img src={mobile} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
