import React from "react";
import Styles from "./index.module.scss";
const AspirantCard = ({ img, name, rank }) => {
  return (
    <div className={Styles.cardArea}>
      <div className={Styles.cardArea__image}>
        <img src={img} alt="error" />
      </div>
      <h3>{name}</h3>
      <p>{rank}</p>
    </div>
  );
};

export default AspirantCard;
