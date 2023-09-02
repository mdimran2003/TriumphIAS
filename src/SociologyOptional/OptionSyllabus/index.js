import React from "react";
import Style from "./index.module.scss";
import Img from "../../Assets/Vikash Ranjan sir.png";
import CommonTittle from "../../Components/CommonTittle";
import OTPSection from "../../Components/OTP-Section";

const OptionalSyllabus = () => {
  return (
    <section className={Style.syllabus}>
      <CommonTittle text="SOSOCIOLOGY {OPTIONAL SYLLABUS}" />

      <div className={Style.syllabus__wrap}>
        <div className={Style.syllabus__wrap__leftSide}>
          <button>Click to Read the Syllabus</button>
          <button>Download Syllabus PDF</button>
        </div>
        <OTPSection/>
      </div>
      <div className={Style.syllabus__aboutSection}>
        <div className={Style.syllabus__aboutSection__image}>
          <img src={Img} alt="error" />
          <p>Education Mentor & Auther</p>
        </div>
        <div className={Style.syllabus__aboutSection__about}>
          <p>
            <span>Mr Vikash Ranjan</span> has emerged as a versatile genius in
            Teaching and Writing books on Sociology & WE General Studies. His
            Sociological Themes and Perspectives are excellent. His teaching
            aptitude is AS Y Simple, Easy and Exam Focused. Under his Expert
            Guidance many students have achieved success in civil services.
          </p>
          <p>
            In the Civil Service Exam 2009, 2010, 2011, 2012, 2013 2014, 2015,
            2016, 2017, 2018, 2019, 2020, 2021 & 2022 his guidance has helped
            many toppers to reserve their dream space in the final list. He has
            written and edited good number of Books for Civil Services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OptionalSyllabus;
