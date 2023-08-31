import React, { useState } from "react";
import Styles from "./index.module.scss";
import FormInput from "../formInput/FormInput";
import GenderAndImg from "../GenderImg/GenderAndImg";
import OtherInfo from "../otherInfo/OtherInfo";
import Textarea from "../textarea/Textarea";
import CourseCard from "../../Components/CoursesSection/Courses-Card";
import CommonTittle from "../../Components/CommonTittle";
import courseImg from "../../Assets/SOCIOLOGY FOR IAS.png";
import CommonPurpleButton from "../../Components/CommonButton/index";
import Submit from "../submitBtn/Submit";

function AddmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    whatsappNo: "",
    fatherName: "",
    fatherPhoneNo: "",
    street: "",
    state: "",
    city: "",
    pincode: "",
    textarea: "",
    gender: "",
    imageFile: "",
    documentFile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    whatsappNo: "",
    fatherName: "",
    fatherPhoneNo: "",
    street: "",
    state: "",
    city: "",
    pincode: "",
    gender: "",
    imageFile: "",
    documentFile: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be a 10-digit number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.dob) {
      newErrors.dob = "DOB is required";
    }
    if (!formData.whatsappNo) {
      newErrors.whatsappNo = "whatsappNo is required";
    } else if (!/^\d{10}$/.test(formData.whatsappNo)) {
      newErrors.whatsappNo = "whatsappNo must be a 10-digit number";
    }

    if (!formData.fatherName) {
      newErrors.fatherName = "Father Name is required";
    }

    if (!formData.fatherPhoneNo) {
      newErrors.fatherPhoneNo = "Father Phone No is required";
    } else if (!/^\d{10}$/.test(formData.fatherPhoneNo)) {
      newErrors.fatherPhoneNo = "Father Phone No must be a 10-digit number";
    }

    if (!formData.street) {
      newErrors.street = "Street Name is required";
    }
    if (!formData.state) {
      newErrors.state = "State is required";
    }

    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.imageFile) {
      newErrors.imageFile = "Image file is required";
    } else if (formData.imageFile.size > 300 * 1024) {
      console.log(true);
      newErrors.imageFile = "Image file size exceeds 300kb";
    } else if (!formData.imageFile.name.toLowerCase().endsWith(".jpeg") && !formData.imageFile.name.toLowerCase().endsWith(".jpg")) {
      newErrors.imageFile = "Only JPEG files are allowed";
    }

    if (!formData.documentFile) {
      newErrors.documentFile = "Image file is required";
    } else if (formData.documentFile.size > 300 * 1024) {
      console.log(true);
      newErrors.documentFile = "Image file size exceeds 300kb";
    } else if (!formData.documentFile.name.toLowerCase().endsWith(".jpeg") && !formData.documentFile.name.toLowerCase().endsWith(".jpg")) {
      newErrors.documentFile = "Only JPEG files are allowed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const streetChageHander = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      street: changeValue,
    }));
  };

  const stateChageHander = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      state: changeValue,
    }));
  };

  const cityChageHander = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      city: changeValue,
    }));
  };

  const pincodeChageHander = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      pincode: changeValue,
    }));
  };

  const textareaHandler = (changeValue) => {
    setFormData((prevData) => ({
      ...prevData,
      textarea: changeValue,
    }));
  };

  const genderSubmit = (selectedGender) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: selectedGender,
    }));
    console.log(selectedGender);
  };

  const handleImageFileChange = (ImageFileData) => {
    console.log(ImageFileData);
    // console.log(ImageFile);
    setFormData((prevData) => ({
      ...prevData,
      imageFile: ImageFileData,
    }));
  };

  const handleDocumentFileChange = (ImageDocumentData) => {
    console.log(ImageDocumentData);
    // console.log(ImageFile);
    setFormData((prevData) => ({
      ...prevData,
      documentFile: ImageFileData,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Perform form submission logic here
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
                  <FormInput type="text" placeholder="Your Full Name" name="Name" id="name" label="Name*" onKeyUp={(e) => setFormData({ ...formData, name: e.target.value })} />
                  {errors.name && <p className={Styles.error}>{errors.name}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="number"
                    placeholder="Your Calling Number"
                    name="phone"
                    id="phone"
                    label="Phone*"
                    onKeyUp={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <p className={Styles.error}>{errors.phone}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="email"
                    placeholder="Your Email Address"
                    name="email"
                    id="email"
                    label="Email-ID*"
                    onKeyUp={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className={Styles.error}>{errors.email}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput type="date" placeholder="dd-mm-yyyy" name="dob" id="dob" label="DOB*" onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
                  {errors.dob && <p className={Styles.error}>{errors.dob}</p>}
                </div>

                <FormInput type="text" placeholder="" name="qualification" id="qualification" label="Qualification*" />
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="number"
                    placeholder="Your Whatsapp No"
                    name="whatsappNo"
                    id="whatsapp"
                    label="Whatsapp No*"
                    onKeyUp={(e) => setFormData({ ...formData, whatsappNo: e.target.value })}
                  />
                  {errors.whatsappNo && <p className={Styles.error}>{errors.whatsappNo}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="text"
                    placeholder=""
                    name="fatherName"
                    id="fatherName"
                    label="Father Name*"
                    onKeyUp={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                  />
                  {errors.fatherName && <p className={Styles.error}>{errors.fatherName}</p>}
                </div>
                <div className={Styles.main__content__form__con_inputGroup}>
                  <FormInput
                    type="number"
                    placeholder=""
                    name="fatherPhoneNo"
                    id="fatherPhoneNo"
                    label="Father Ph No*"
                    onKeyUp={(e) => setFormData({ ...formData, fatherPhoneNo: e.target.value })}
                  />
                  {errors.fatherPhoneNo && <p className={Styles.error}>{errors.fatherPhoneNo}</p>}
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
