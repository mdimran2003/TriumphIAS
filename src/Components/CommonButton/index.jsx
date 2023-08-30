import React from "react";
import Styles from "./index.module.scss";
const CommonPurpleButton = ({ text, icon }) => {
  return (
    <div className={Styles.buttonArea}>
      <button>
        <span>{icon}</span>
        {text}
      </button>
    </div>
  );
};

export default CommonPurpleButton;
