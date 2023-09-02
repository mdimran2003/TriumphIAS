import React from "react";
import Styles from "./index.module.scss";

function FormInput({
  type,
  placeholder,
  name,
  id,
  label,
  marginBottom,
  laberMargin,
}) {
  return (
    <>
      <div style={{ marginBottom: `${marginBottom}` }} className={Styles.main}>
        <div className={Styles.main__content}>
          <label style={{ marginBottom: `${laberMargin}` }} htmlFor={id}>
            {label}
          </label>
          <input type={type} placeholder={placeholder} name={name} id={id} />
        </div>
      </div>
    </>
  );
}

export default FormInput;
