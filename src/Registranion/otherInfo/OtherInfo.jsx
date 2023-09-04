import React from "react";
import Styles from "./index.module.scss";
import FormInput from "../formInput/FormInput";

function OtherInfo({ onStreetChange, errors, onStateChange, onCityChange, onPincodechange }) {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <div>
            <FormInput
              type="text"
              placeholder="Address Line 1"
              name="Name"
              id="street"
              label="Street*"
              onKeyUp={(e) => {
                onStreetChange(e.target.value);
              }}
            />
            {errors?.UserAddress1 && <p className={Styles.error}>{errors.UserAddress1}</p>}
          </div>
          <div>
            <FormInput
              type="text"
              placeholder="State"
              name="phone"
              id="state"
              label="State*"
              onKeyUp={(e) => {
                onStateChange(e.target.value);
              }}
            />
            {errors.UserState && <p className={Styles.error}>{errors.UserState}</p>}
          </div>

          <div>
            <FormInput
              type="text"
              placeholder="City"
              name="email"
              id="city"
              label="City*"
              onKeyUp={(e) => {
                onCityChange(e.target.value);
              }}
            />
            {errors.UserCity && <p className={Styles.error}>{errors.UserCity}</p>}
          </div>
          <div>
            <FormInput
              type="number"
              placeholder="Pin Code"
              name="dob"
              id="Pincode"
              label="Pincode*"
              onKeyUp={(e) => {
                onPincodechange(e.target.value);
              }}
            />
            {errors.UserPinCode && <p className={Styles.error}>{errors.UserPinCode}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherInfo;
