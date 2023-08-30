import React from "react";
import Style from "./index.module.scss";
import Img1 from "../Assets/Header.png";
import SociologyCoaching from "./SociologyCoaching";
import SociologyFoundation from "./SociologyFoundation";
import SociologySyllaus from "./SociologySyllabs";
import AdmissionAccount from "./AddmissionAccount";
import OptionalSyllabus from "./OptionSyllabus";
import Carousel from "../common/carousel/Carousel";
import CommonTittle from "../Components/CommonTittle";
import SelectionSection from "../Components/Selection-Section";
import getColorTitle from "../common/util/getColorTitle";
const SociologyOptional = () => {
  return (
    <>
      <section className={Style.bannerSection}>
        <Carousel gap={0} circular numberOfCards={1}>
          <div className={Style.bannerSection__image}>
            <img src={Img1} alt="error" />
          </div>
          <div className={Style.bannerSection__image}>
            <img src={Img1} alt="error" />
          </div>
          <div className={Style.bannerSection__image}>
            <img src={Img1} alt="error" />
          </div>
          <div className={Style.bannerSection__image}>
            <img src={Img1} alt="error" />
          </div>
        </Carousel>
        <SociologyCoaching />
        <SociologyFoundation />
        <CommonTittle
          text="{Sociology} Optional For IAS | Toppers of {Sociology}"
          // colorText="Sociology"
        />
        <SelectionSection />

        <SociologySyllaus />
        <OptionalSyllabus />
        <AdmissionAccount />
      </section>
    </>
  );
};

export default SociologyOptional;
