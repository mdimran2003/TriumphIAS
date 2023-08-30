import React from "react";
import Styles from "./index.module.scss";

function GenderAndImg() {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__con}>
          <div className={Styles.main__con__gender}>
            <form>
              <input type="radio" id="male" name="gender" />
              <label>MALE</label>
              <input type="radio" id="female" name="gender" />
              <label>FEMALE</label>
              <input type="radio" id="other" name="gender" />
              <label>OTHER</label>
            </form>
          </div>

          <div className={Styles.main__con__img}>
            <p>Image (Max-size: 300kb) jpeg *</p>
            <input type="file" id="file" name="file" />
          </div>
          <div className={Styles.main__con__aadhar}>
            <p>ID Card (Aadhar Card / VoterID / Passport) (Max-size: 300kb) jpeg *</p>
            <input type="file" id="aadhar" name="aadhar" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GenderAndImg;
