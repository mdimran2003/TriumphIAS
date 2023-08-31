import React, { useState } from "react";
import Styles from "./index.module.scss";

function FormInput({ type, placeholder, name, id, label, onKeyUp, onChange }) {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <label htmlFor={id}>{label}</label>
          <input type={type} placeholder={placeholder} name={name} id={id} onKeyUp={onKeyUp} onChange={onChange} />
        </div>
      </div>
    </>
  );
}

export default FormInput;
