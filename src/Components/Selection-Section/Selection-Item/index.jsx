import React from "react";
import Styles from "./index.module.scss";
const SelectionCard = ({ imgUrl,variant }) => {
  return (
    <div className={Styles.cardArea}>
      <div className={`${Styles.cardArea__image}  ${variant === 'dull' && Styles.cardArea__dull} `}>
        <img src={imgUrl} alt="error" />
      </div>
    </div>
  );
};

export default SelectionCard;
