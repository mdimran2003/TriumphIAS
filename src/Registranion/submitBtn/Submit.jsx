import React from "react";
import Styles from "./index.module.scss";

function Submit({ type, onClick, disabled, className }) {
  const classes = `btn ${className}`;
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <button className={classes} type={type} onClick={onClick} disabled={disabled}>
            NEXT
          </button>
        </div>
      </div>
    </>
  );
}

export default Submit;
