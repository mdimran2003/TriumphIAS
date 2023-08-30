import React from "react";
import Styles from "./index.module.scss";
const FeatureItem = ({ para, byName, img }) => {
  return (
    <div className={Styles.featureCard}>
      <div className={Styles.featureCard__image}>
        <img src={img} alt="error" />
      </div>
      <p>{para}</p>
      <span>{byName}</span>
    </div>
  );
};

export default FeatureItem;
