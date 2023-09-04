import React from "react";
import Styles from "./index.module.scss";

function GenderAndImg({ onGenderchange, formData, errors, onImageFileChange, onDocumentFileChange }) {
  console.log(formData);
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__con}>
          <div className={Styles.c1}>
            <div className={Styles.main__con__gender}>
              <div className={Styles.main__con__gender__radioGroup}>
                <input type="radio" id="male" name="gender" value="male" onChange={(e) => onGenderchange(e.target.value)} checked={formData?.gender === "male"} />
                <label>Male</label>
              </div>
              <div className={Styles.main__con__gender__radioGroup}>
                <input type="radio" id="female" name="gender" value="female" onChange={(e) => onGenderchange(e.target.value)} checked={formData?.gender === "female"} />
                <label>Female</label>
              </div>
              <div className={Styles.main__con__gender__radioGroup}>
                <input type="radio" id="other" name="gender" value="other" onChange={(e) => onGenderchange(e.target.value)} checked={formData?.gender === "other"} />
                <label>Other</label>
              </div>
            </div>
            {errors.gender && <p className={Styles.error}>{errors.gender}</p>}
          </div>

          <div className={Styles.c2}>
            <div className={Styles.main__con__img}>
              <p>Image (Max-size: 300kb) jpeg*</p>
              <input type="file" id="file" name="file" accept=".jpeg, .jpg" onChange={(e) => onImageFileChange(e.target.files[0])} />
            </div>
            {errors.photo && <p className={Styles.error}>{errors.photo}</p>}
          </div>
          <div className={Styles.c3}>
            <div className={Styles.main__con__aadhar}>
              <p>ID Card (Aadhar Card / VoterID / Passport) (Max-size: 300kb) jpeg*</p>
              <input type="file" id="aadhar" name="aadhar" accept=".jpeg, .jpg" onChange={(e) => onDocumentFileChange(e.target.files[0])} />
            </div>
            {errors.idcard && <p className={Styles.error}>{errors.idcard}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default GenderAndImg;
