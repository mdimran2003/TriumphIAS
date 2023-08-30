import React from "react";
import Styles from "./index.module.scss";
const SelectionCard = ({ imgUrl }) => {
  return (
    <div className={Styles.cardArea}>
      <div className={Styles.cardArea__image}>
        <img src={imgUrl} alt="error" />
      </div>
    </div>
  );
};

export default SelectionCard;
