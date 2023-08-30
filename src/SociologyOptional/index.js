import React from "react";
import Style from "./index.module.scss";
import Img1 from "../Assets/Header.png";
import SociologyCoaching from "./SociologyCoaching";
import SociologyFoundation from "./SociologyFoundation";
import SociologySyllaus from "./SociologySyllabs";
import AdmissionAccount from "./AddmissionAccount";
import OptionalSyllabus from "./OptionSyllabus";
const SociologyOptional = () => {
  return (
    <>
      <section className={Style.bannerSection}>
        <div className={Style.bannerSection__image}>
          <img src={Img1} alt="error" />
        </div>
        <div className={Style.bannerSection__crouselBtn}>
          <button className={Style.bannerSection__crouselBtn__leftBtn}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className={Style.bannerSection__crouselBtn__rightBtn}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <SociologyCoaching />
        <SociologyFoundation />
        <SociologySyllaus />
        <OptionalSyllabus />
        <AdmissionAccount />
      </section>
    </>
  );
};

export default SociologyOptional;
