import React from "react";
import Styles from "./index.module.scss";
const CommonSelectField = () => {
  return (
    <div className={Styles.selectMultiple}>
      <select name="Choose The Course" id="" placeholder="Choose The Course">
        <option value="Choose The Course">Choose The Course</option>
      </select>
    </div>
  );
};

export default CommonSelectField;
