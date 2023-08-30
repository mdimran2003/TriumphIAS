import React from "react";
import Styles from "./index.module.scss";

function Textarea() {
  return (
    <>
      <div className={Styles.con}></div>
      <div className={Styles.con__main}>
        <label htmlFor="info">Additional Information</label>
        <textarea id="info" placeholder="Additional Information"></textarea>
      </div>
    </>
  );
}

export default Textarea;
