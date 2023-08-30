import React from "react";
import Styles from "./index.module.scss";
import CourseCard from "./Courses-Card";
import desktop from "../../Assets/SOCIOLOGY FOR IAS.png";
import essayIas from "../../Assets/ESSAY FOR IAS.png";
import essayTestSeries from "../../Assets/ESSAY TEST SERIES.png";
import sociologyTestSeries from "../../Assets/SOCIOLOGY TEST SERIES.png";
import mains from "../../Assets/MAINS ANSWER WRITING.png";
import development from "../../Assets/PERSONALITY DEVELOPMENT.png";

const coruseObj = [
  {
    courseName: "sociology for ias",
    detail: "Live and Recorded Courses by Vikash Ranjan Sir",
    img: desktop,
    explore: "Explore the Course",
  },
  {
    courseName: "sociology for ias",
    detail: "Live and Recorded Courses by Vikash Ranjan Sir",
    img: essayIas,
    explore: "Explore the Course",
  },
  {
    courseName: "sociology for ias",
    detail: "Live and Recorded Courses by Vikash Ranjan Sir",
    img: mains,
    explore: "Explore the Course",
  },
  {
    courseName: "sociology for ias",
    detail: "Live and Recorded Courses by Vikash Ranjan Sir",
    img: sociologyTestSeries,
    explore: "Explore the Course",
  },
  {
    courseName: "sociology for ias",
    detail: "Live and Recorded Courses by Vikash Ranjan Sir",
    img: essayTestSeries,
    explore: "Explore the Course",
  },
  {
    courseName: "sociology for ias",
    detail: "Live and Recorded Courses by Vikash Ranjan Sir",
    img: development,
    explore: "Explore the Course",
  },
];
const CourseSection = () => {
  return (
    <div className={Styles.courseArea}>
      {coruseObj.map((item, index) => {
        return <CourseCard key={index} corsrName={item.courseName} corseDetails={item.detail} img={item.img} explore={item.explore} />;
      })}
    </div>
  );
};

export default CourseSection;
