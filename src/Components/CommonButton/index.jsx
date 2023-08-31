import React from "react";
import Styles from "./index.module.scss";
const CommonPurpleButton = ({ text, icon, width, backgroundColor }) => {
  return (
    <div className={Styles.buttonArea}>
      <button style={{ width: `${width}`, backgroundColor: `${backgroundColor}` }}>
        <span>{icon}</span>
        {text}
      </button>
    </div>
  );
};

export default CommonPurpleButton;
