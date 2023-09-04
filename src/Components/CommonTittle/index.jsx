import React from "react";
import Styles from "./index.module.scss";
import getColorTitle from "../../common/util/getColorTitle";
const CommonTittle = ({ text }) => {
  return (
    <div className={Styles.titlleArea}>
      <p   dangerouslySetInnerHTML={{
            __html: getColorTitle(text),
          }}>
        {/* {text} <span>{colorText}</span>
        <span> </span>
        {rightText} */}
      </p>
    </div>
  );
};

export default CommonTittle;
