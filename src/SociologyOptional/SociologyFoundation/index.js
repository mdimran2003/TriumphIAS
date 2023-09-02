import React from "react";
import Style from "./index.module.scss";
import Img from "../../Assets/Video 1.png";
import Img2 from "../../Assets/Video 2.png";
import Img3 from "../../Assets/Video 3.png";
import Img4 from "../../Assets/Video 4.png";
import CommonTittle from "../../Components/CommonTittle";

const SociologyFoundation = () => {
  return (
    <>
      <section className={Style.foundation}>
        <CommonTittle
          text=" LATEST VIDEOS ON"
          colorText="SOCIOLOGY"
          rightText="FOUNDATION"
        />

        <div className={Style.foundation__wrap}>
          <div className={Style.foundation__wrap__image}>
            <img src={Img} alt="error" />
          </div>
          <div className={Style.foundation__wrap__image}>
            <img src={Img2} alt="error" />
          </div>
          <div className={Style.foundation__wrap__image}>
            <img src={Img3} alt="error" />
          </div>
          <div className={Style.foundation__wrap__image}>
            <img src={Img4} alt="error" />
          </div>
          <div className={Style.foundation__wrap__image}>
            <img src={Img} alt="error" />
          </div>
          <div className={Style.foundation__wrap__image}>
            <img src={Img2} alt="error" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SociologyFoundation;
