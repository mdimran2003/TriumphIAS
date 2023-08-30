import React from "react";
import Styles from "./index.module.scss";
import FormInput from "../formInput/FormInput";

function OtherInfo() {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <FormInput type="text" placeholder="Address Line 1" name="Name" id="street" label="street*" />
          <FormInput type="text" placeholder="State" name="phone" id="state" label="state*" />
          <FormInput type="text" placeholder="City" name="email" id="city" label="city*" />
          <FormInput type="text" placeholder="Pin Code" name="dob" id="Pincode" label="Pincode*" />
        </div>
      </div>
    </>
  );
}

export default OtherInfo;
