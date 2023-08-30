import React from "react";
import Styles from "./index.module.scss";
import CommonBatch from "./CommonBatch";
import vikashRanjan from "../../Assets/Vikash Ranjan sir.png";
const AboutRanjanSir = () => {
  return (
    <div className={Styles.aboutArea}>
      <div className={Styles.aboutArea__imageArea}>
        <div className={Styles.aboutArea__imageArea__image}>
          <img src={vikashRanjan} alt="error" />
        </div>
        <span>
          <CommonBatch />
        </span>
      </div>
      <div className={Styles.aboutArea__detailArea}>
        <p>
          Mr. Vikash Ranjan has emerged as a versatile genius in Teaching and Writing books on Sociology & General Studies. His Sociological
          Themes and Perspectives are excellent. His teaching aptitude is Simple, Easy and Exam Focused. Under his Expert Guidance many
          students have achieved success in civil services. In the Civil Service Exam 2009, 2010, 2011, 2012, 2013 2014, 2015, 2016, 2017,
          2018, 2019, 2020, 2021 & 2022 his guidance has helped many toppers to reserve their dream space in the final list. He has written
          and edited good number of Books for Civil Services. To mention a few
        </p>
        <ul>
          <h3>To Mention a Few-</h3>
          <li> Fundamental of Sociology (For CSE Mains),</li>
          <li>Applied Sociology (For CSE Mains),</li>
          <li>National Issues of Social, Economic and Political Relevance,</li>
          <li>Survey of Health, Women and Child Development in India,</li>
          <li>Indian Heritage and Cuture-Themes & Perspectives.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutRanjanSir;
