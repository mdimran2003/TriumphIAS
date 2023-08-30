import React from "react";
import Style from "./index.module.scss";
import Img from "../../Assets/Blog 1.png";
import Img1 from "../../Assets/Blog 2.png";
import CommonTittle from "../../Components/CommonTittle";
import Carousel from "../../common/carousel/Carousel";

const SociologyCoaching = () => {
  return (
    <>
      <section className={Style.BestSociologyCoching}>
        <CommonTittle colorText="TRIUMPH IAS  { - BEST SOCIOLOGY OPTION COACHING}" />
        <div className={Style.BestSociologyCoching__latest}>
          <div className={Style.BestSociologyCoching__latest__blog}>
            <h4>Latest Blog of Sociology</h4>
          </div>
          <div className={Style.BestSociologyCoching__latest__sliderwrap}>
            <Carousel
              gap={60}
              circular
              numberOfCards={2}
              iconClass={Style.iconClass}
            >
              <div
                className={Style.BestSociologyCoching__latest__sliderwrap__row}
              >
                <img src={Img} alt="error" />
              </div>
              <div
                className={Style.BestSociologyCoching__latest__sliderwrap__row}
              >
                <img src={Img1} alt="error" />
              </div>

              {/* <div className={Style.BestSociologyCoching__latest__sliderBtn}>
              <button
                className={
                  Style.BestSociologyCoching__latest__sliderBtn__leftBtn
                }
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
                className={
                  Style.BestSociologyCoching__latest__sliderBtn__rightBtn
                }
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div> */}
            </Carousel>
          </div>

          <div className={Style.BestSociologyCoching__latest__call}>
            <h3 className={Style.BestSociologyCoching__latest__call__head}>
              Have any Doubts about Sociology Foundation? Call for Free
              Consultation from Experts
            </h3>
            <button className={Style.BestSociologyCoching__latest__call__no}>
              Call @ +91 7840888102
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SociologyCoaching;
