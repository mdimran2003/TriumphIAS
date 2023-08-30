import React from "react";
import Styles from "./index.module.scss";
const AspirantCard = ({ img, name, rank ,variant}) => {
  return (
    <div className={` ${variant === 'dull' && Styles.cardArea__dull}`}>
      <div className={Styles.cardArea__image}>
        <img src={img} alt="error" />
      </div>
      <h3>{name}</h3>
      <p>{rank}</p>
    </div>
  );
};

export default AspirantCard;
