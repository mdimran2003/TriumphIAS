import React from "react";
import Styles from "./index.module.scss";
import FormInput from "../formInput/FormInput";
import GenderAndImg from "../GenderImg/GenderAndImg";
import OtherInfo from "../otherInfo/OtherInfo";
import Textarea from "../textarea/Textarea";
import CourseCard from "../../Components/CoursesSection/Courses-Card";
import CommonTittle from "../../Components/CommonTittle";
import courseImg from "../../Assets/SOCIOLOGY FOR IAS.png";

function AddmissionForm() {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <CommonTittle text="First fill " colorText="admission form" rightText="then proceed next" />
          <div className={Styles.main__content__sociology}>
            <div className={Styles.main__content__sociology__card}>
              <CourseCard
                corsrName="SOCIOLOGY FOR IAS"
                corseDetails="Live and Recorded Courses by Vikash Ranjan Sir"
                img={courseImg}
                explore="Explore the Course"
              />
            </div>
            <div className={Styles.main__content__sociology__text}>
              <h2>SOCIOLOGY FOUNDATION WITH DAILY ANSWER WRITING</h2>
              <p>By Vikash Ranjan Sir</p>
            </div>
          </div>

          <div className={Styles.main__content__form}>
            <div className={Styles.main__content__form__con}>
              <FormInput type="text" placeholder="Your Full Name" name="Name" id="name" label="Name*" />
              <FormInput type="number" placeholder="Your Calling Number" name="phone" id="phone" label="Phone*" />
              <FormInput type="email" placeholder="Your Email Address" name="email" id="email" label="Email-ID*" />
              <FormInput type="date" placeholder="dd-mm-yyyy" name="dob" id="dob" label="DOB*" />

              <FormInput type="text" placeholder="" name="qualification" id="qualification" label="Qualification" />
              <FormInput type="number" placeholder="Your Whatsapp No" name="whatsappNo" id="whatsapp" label="Whatsapp No" />
              <FormInput type="text" placeholder="" name="fatherName" id="fatherName" label="Father Name*" />
              <FormInput type="number" placeholder="" name="fatherPhoneNo" id="fatherPhoneNo" label="Father Ph No*" />
            </div>
          </div>
          <div className={Styles.main__content__genderAndImg}>
            <GenderAndImg />
          </div>
          <div className={Styles.main__content__otherInfo}>
            <OtherInfo />
          </div>
          <div className={Styles.main__content__textarea}>
            <Textarea />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddmissionForm;
