import React from "react";
import AddmissionForm from "../../Registranion/AddmissionForm/AddmissionForm";
import Styles from "./index.module.scss";
import CommonTittle from "../../Components/CommonTittle";
import CourseSection from "../../Components/CoursesSection";
import AboutRanjanSir from "../../Components/AboutRanjanSir";
import AppStoreSection from "../../Components/AppStoreSection";
import MapSection from "../../Components/MapSection";
import SociologyFoundation from "../../SociologyOptional/SociologyFoundation";
const RegistraionPage = () => {
  return (
    <div className={Styles.registrationArea}>
      <AddmissionForm />
      <CommonTittle text="Explore the latest videos on" colorText="sociology" rightText="foundation" />
      <SociologyFoundation />
      <CommonTittle text="Courses" colorText="offered" />
      <CourseSection />
      <CommonTittle text="About" colorText="Vikash ranjan" rightText="sir" />
      <AboutRanjanSir />
      <AppStoreSection />
      <MapSection />
    </div>
  );
};

export default RegistraionPage;
