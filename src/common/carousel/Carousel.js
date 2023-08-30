import React from "react";
import Styles from "./index.module.scss";
import NukaCarousel, { ScrollMode } from "nuka-carousel";

const Carousel = ({
  children,
  className,
  gap = 20,
  zoomScale = 1,
  circular = false,
  numberOfCards = 3,
  activeCardPosition = "left",
  handleNavClick,
  iconClass,
  autoPlay = false,
}) => {
  const renderButton = (isLeft, controlProps) => (
    <button
      className={`${isLeft ? Styles.leftBtn : Styles.rightBtn} ${iconClass} `}
      disabled={
        isLeft ? controlProps.previousDisabled : controlProps.nextDisabled
      }
      onClick={() =>
        isLeft ? controlProps.previousSlide() : controlProps.nextSlide()
      }
    >
      <i
        className={` ${
          isLeft ? "fa-solid fa-angle-left" : "fa-solid fa-angle-right"
        }   text-title1 group-disabled:opacity-50`}
      />
    </button>
  );

  //   <button className={Style.bannerSection__crouselBtn__leftBtn}>
  //   <i className="fa-solid fa-angle-left"></i>
  // </button>
  // <button className={Style.bannerSection__crouselBtn__rightBtn}>
  //   <i className="fa-solid fa-angle-right"></i>
  // </button>

  const renderLeftButton = (props) => renderButton(true, props);

  const renderRightButton = (props) => renderButton(false, props);
  return (
    <NukaCarousel
      swiping
      cellSpacing={gap}
      cellAlign={activeCardPosition}
      wrapAround={circular}
      className={className}
      slidesToShow={numberOfCards}
      scrollMode={ScrollMode.remainder}
      renderCenterRightControls={renderRightButton}
      renderCenterLeftControls={renderLeftButton}
      renderBottomCenterControls={null}
      animation="zoom"
      zoomScale={zoomScale}
      autoplay={autoPlay}
      autoplayInterval={3000}
      afterSlide={(index) => {
        if (handleNavClick) handleNavClick(index);
      }}
    >
      {children}
    </NukaCarousel>
  );
};

export default Carousel;
