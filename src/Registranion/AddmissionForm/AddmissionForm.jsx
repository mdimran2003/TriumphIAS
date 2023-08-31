import React, { useState } from "react";
import Styles from "./index.module.scss";
import FormInput from "../formInput/FormInput";
import GenderAndImg from "../GenderImg/GenderAndImg";
import OtherInfo from "../otherInfo/OtherInfo";
import Textarea from "../textarea/Textarea";
import CourseCard from "../../Components/CoursesSection/Courses-Card";
import CommonTittle from "../../Components/CommonTittle";
import courseImg from "../../Assets/SOCIOLOGY FOR IAS.png";
import Submit from "../submitBtn/Submit";

function AddmissionForm() {
  const [formData, setFormData] = useState({
    UserName: "",
    UserPhone: "",
    UserEmail: "",
    dob: "",
    UserWhatsappNo: "",
    fName: "",
    fNumber: "",
    UserAddress1: "",
    UserState: "",
    UserCity: "",
    UserPinCode: "",
    AddInfo: "",
    gender: "",
    photo: "",
    idcard: "",
    qfcation: "",
  });

  const [errors, setErrors] = useState({
    UserName: "",
    UserPhone: "",
    UserEmail: "",
    dob: "",
    UserWhatsappNo: "",
    fName: "",
    fNumber: "",
    UserAddress1: "",
    UserState: "",
    UserCity: "",
    UserPinCode: "",
    gender: "",
    photo: "",
    idcard: "",
    qfcation: "",
  });

  const handleInputchange = (input) => {
    setFormData(input);
    validateForm(input);
  };

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.UserName) {
      newErrors.UserName = "Name is required";
    }
    if (!formData.qfcation) {
      newErrors.qfcation = "Qualifications is required";
    }

    if (!formData.UserPhone) {
      newErrors.UserPhone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.UserPhone)) {
      newErrors.UserPhone = "Phone must be a 10-digit number";
    }

    if (!formData.UserEmail) {
      newErrors.UserEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.UserEmail)) {
      newErrors.UserEmail = "Invalid email format";
    }

    if (!formData.dob) {
      newErrors.dob = "DOB is required";
    }
    if (!formData.UserWhatsappNo) {
      newErrors.UserWhatsappNo = "whatsappNo is required";
    } else if (!/^\d{10}$/.test(formData.UserWhatsappNo)) {
      newErrors.UserWhatsappNo = "whatsappNo must be a 10-digit number";
    }

    if (!formData.fName) {
      newErrors.fName = "Father Name is required";
    }

    if (!formData.fNumber) {
      newErrors.fNumber = "Father Phone No is required";
    } else if (!/^\d{10}$/.test(formData.fNumber)) {
      newErrors.fNumber = "Father Phone No must be a 10-digit number";
    }

    if (!formData.UserAddress1) {
      newErrors.UserAddress1 = "Street Name is required";
    }
    if (!formData.UserState) {
      newErrors.UserState = "State is required";
    }

    if (!formData.UserCity) {
      newErrors.UserCity = "City is required";
    }
    if (!formData.UserPinCode) {
      newErrors.UserPinCode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.UserPinCode)) {
      newErrors.UserPinCode = "PinCode must be a 6-digit number";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.photo) {
      newErrors.photo = "Image file is required";
    } else if (formData.photo.size > 300 * 1024) {
      console.log(true);
      newErrors.photo = "Image file size exceeds 300kb";
    } else if (!formData.photo.name.toLowerCase().endsWith(".jpeg") && !formData.photo.name.toLowerCase().endsWith(".jpg")) {
      newErrors.photo = "Only JPEG files are allowed";
    }

    if (!formData.idcard) {
      newErrors.idcard = "Image file is required";
    } else if (formData.idcard.size > 300 * 1024) {
      console.log(true);
      newErrors.idcard = "Image file size exceeds 300kb";
    } else if (!formData.idcard.name.toLowerCase().endsWith(".jpeg") && !formData.idcard.name.toLowerCase().endsWith(".jpg")) {
      newErrors.idcard = "Only JPEG files are allowed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const streetChageHander = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      UserAddress1: changeValue,
    }));
    validateForm({ ...formData, UserAddress1: changeValue });
  };

  const stateChageHander = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      UserState: changeValue,
    }));
    validateForm({ ...formData, UserState: changeValue });
  };

  const cityChageHander = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      UserCity: changeValue,
    }));
    validateForm({ ...formData, UserCity: changeValue });
  };

  const pincodeChageHander = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      UserPinCode: changeValue,
    }));
    validateForm({ ...formData, UserPinCode: changeValue });
  };

  const textareaHandler = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      AddInfo: changeValue,
    }));
    validateForm({ ...formData, AddInfo: changeValue });
  };

  const genderSubmit = (selectedGender) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: selectedGender,
    }));

    validateForm({ ...formData, gender: selectedGender });
  };

  const handleImageFileChange = (ImageFileData) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: ImageFileData,
    }));
    validateForm({ ...formData, photo: ImageFileData });
  };

  const handleDocumentFileChange = (ImageDocumentData) => {
    setFormData((prevData) => ({
      ...prevData,
      idcard: ImageDocumentData,
    }));
    validateForm({ ...formData, idcard: ImageDocumentData });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <CommonTittle text="First fill " colorText="admission form" rightText="then proceed next" />
          <div className={Styles.main__content__sociology}>
            <div className={Styles.main__content__sociology__card}>
              <CourseCard corsrName="SOCIOLOGY FOR IAS" corseDetails="Live and Recorded Courses by Vikash Ranjan Sir" img={courseImg} explore="Explore the Course" />
            </div>
            <div className={Styles.main__content__sociology__text}>
              <h2>SOCIOLOGY FOUNDATION WITH DAILY ANSWER WRITING</h2>
              <p>By Vikash Ranjan Sir</p>
            </div>
          </div>
          <form onSubmit={onSubmitHandler}>
            <div className={Styles.main__content__form}>
              <div className={Styles.main__content__form__con}>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="text"
                    placeholder="Your Full Name"
                    name="Name"
                    id="name"
                    label="Name*"
                    onChange={(e) => handleInputchange({ ...formData, UserName: e.target.value })}
                  />
                  {errors.UserName && <p className={Styles.error}>{errors.UserName}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="number"
                    placeholder="Your Calling Number"
                    name="phone"
                    id="phone"
                    label="Phone*"
                    onChange={(e) => handleInputchange({ ...formData, UserPhone: e.target.value })}
                  />
                  {errors.UserPhone && <p className={Styles.error}>{errors.UserPhone}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="email"
                    placeholder="Your Email Address"
                    name="email"
                    id="email"
                    label="Email-ID*"
                    onChange={(e) => handleInputchange({ ...formData, UserEmail: e.target.value })}
                  />
                  {errors.UserEmail && <p className={Styles.error}>{errors.UserEmail}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput type="date" placeholder="dd-mm-yyyy" name="dob" id="dob" label="DOB*" onChange={(e) => handleInputchange({ ...formData, dob: e.target.value })} />
                  {errors.dob && <p className={Styles.error}>{errors.dob}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="text"
                    placeholder=""
                    name="qualification"
                    id="qualification"
                    label="Qualification*"
                    onChange={(e) => handleInputchange({ ...formData, qfcation: e.target.value })}
                  />
                  {errors.qfcation && <p className={Styles.error}>{errors.qfcation}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="number"
                    placeholder="Your Whatsapp No"
                    name="whatsappNo"
                    id="whatsapp"
                    label="Whatsapp No*"
                    onChange={(e) => handleInputchange({ ...formData, UserWhatsappNo: e.target.value })}
                  />
                  {errors.UserWhatsappNo && <p className={Styles.error}>{errors.UserWhatsappNo}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="text"
                    placeholder=""
                    name="fatherName"
                    id="fatherName"
                    label="Father Name*"
                    onChange={(e) => handleInputchange({ ...formData, fName: e.target.value })}
                  />
                  {errors.fName && <p className={Styles.error}>{errors.fName}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="number"
                    placeholder=""
                    name="fatherPhoneNo"
                    id="fatherPhoneNo"
                    label="Father Ph No*"
                    onChange={(e) => handleInputchange({ ...formData, fNumber: e.target.value })}
                  />
                  {errors.fNumber && <p className={Styles.error}>{errors.fNumber}</p>}
                </div>
              </div>
            </div>
            <div className={Styles.main__content__genderAndImg}>
              <GenderAndImg
                onGenderchange={genderSubmit}
                errors={errors}
                formData={formData}
                onImageFileChange={handleImageFileChange}
                onDocumentFileChange={handleDocumentFileChange}
              />
            </div>
            <div className={Styles.main__content__otherInfo}>
              <OtherInfo onStreetChange={streetChageHander} onStateChange={stateChageHander} onCityChange={cityChageHander} onPincodechange={pincodeChageHander} errors={errors} />
            </div>
            <div className={Styles.main__content__textarea}>
              <Textarea onTextarea={textareaHandler} />
            </div>
            <div className={Styles.main__content__submitBtn}>
              <Submit type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddmissionForm;
