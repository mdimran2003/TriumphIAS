import React from "react";
import Styles from "./index.module.scss";
import Header from "../../Components/Header";
import BannerSection from "../../Components/BannerSection";
import GuidSection from "../../Components/Guid-Section";
import CommonTittle from "../../Components/CommonTittle";
import SelectionSection from "../../Components/Selection-Section";
import FeatureSection from "../../Components/FeatureSection";
import CourseSection from "../../Components/CoursesSection";
import AspirantsSection from "../../Components/AsspirantsSection";
import AboutRanjanSir from "../../Components/AboutRanjanSir";
import ContactSection from "../../Components/ContactSection";
import AppStoreSection from "../../Components/AppStoreSection";
import MessageSection from "../../Components/MessageSection";
import MapSection from "../../Components/MapSection";
import FooterSection from "../../Components/FooterSection";
import { isMobile } from "react-device-detect";
const HomePage = () => {
  if (isMobile) {
    return (
      <div >
        <BannerSection />
        <GuidSection />
        <CommonTittle text="100+ selections in cse 2022 @" colorText="triumph ias" />
        <SelectionSection />
        <CommonTittle text="why choose" colorText="triumph ias?" />
        <FeatureSection />
        <CommonTittle text="Courses" colorText="offered" />
        <CourseSection />
        <CommonTittle text="Selected" colorText="aspirants" rightText="feedBacks" />
        <AspirantsSection />
        <CommonTittle text="About" colorText="Vikash ranjan" rightText="sir" />
        <ContactSection />
        <AboutRanjanSir />
        <AppStoreSection />
      </div>
    );
  }
  return (
    <div>
      <BannerSection />
      <GuidSection />
      <CommonTittle text="100+ selections in cse 2022 @" colorText="triumph ias" />
      <SelectionSection />
      <CommonTittle text="why choose" colorText="triumph ias?" />
      <FeatureSection />
      <CommonTittle text="Courses" colorText="offered" />
      <CourseSection />
      <CommonTittle text="Selected" colorText="aspirants" rightText="feedBacks" />
      <AspirantsSection />
      <CommonTittle text="About" colorText="Vikash ranjan" rightText="sir" />
      <AboutRanjanSir />
      <ContactSection />
      <AppStoreSection />
      <MessageSection />
    </div>
  );
};

export default HomePage;
