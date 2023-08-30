import React from "react";
import Styles from "./index.module.scss";
const CourseCard = ({ corsrName, corseDetails, img, explore }) => {
  return (
    <div className={Styles.cardArea}>
      <h3>{corsrName}</h3>
      <div className={Styles.cardArea__detailArea}>
        <div className={Styles.cardArea__detailArea__details}>
          <p>{corseDetails}</p>
          <span>{explore}</span>
        </div>
        <div className={Styles.cardArea__detailArea__image}>
          <img src={img} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
