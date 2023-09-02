import React from "react";
import AddmissionForm from "../../Registranion/AddmissionForm/AddmissionForm";
import Styles from "./index.module.scss";
import CommonTittle from "../../Components/CommonTittle";
import CourseSection from "../../Components/CoursesSection";
import AboutRanjanSir from "../../Components/AboutRanjanSir";
import AppStoreSection from "../../Components/AppStoreSection";
import SociologyFoundation from "../../SociologyOptional/SociologyFoundation";
const RegistraionPage = () => {
  return (
    <div className={Styles.registrationArea}>
      <AddmissionForm />
      <CommonTittle text="Explore the latest videos on {sociology} foundation" />
      <SociologyFoundation />
      <CommonTittle text="Courses {offered}"/>
      <CourseSection />
      <CommonTittle text="About {Vikash ranjan} sir" />
      <AboutRanjanSir />
      <AppStoreSection />
    </div>
  );
};

export default RegistraionPage;
