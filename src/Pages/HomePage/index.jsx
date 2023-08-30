import React from "react";
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
import { isMobile } from "react-device-detect";
const HomePage = () => {
  if (isMobile) {
    return (
      <div >
        <BannerSection />
        <GuidSection />
        <CommonTittle text="100+ selections in cse 2022 @{triumph ias}" />
        <SelectionSection isMobile={isMobile} />
        <CommonTittle text="why choose {triumph ias?}"  />
        <FeatureSection />
        <CommonTittle text="Courses {offered}" />
        <CourseSection />
        <CommonTittle text="Selected {aspirants} feedBacks" />
        <AspirantsSection />
        <CommonTittle text="About {Vikash ranjan} sir" />
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
      <CommonTittle text="100+ selections in cse 2022 @{triumph ias}" />
      <SelectionSection isMobile={isMobile} />
      <CommonTittle text="why choose {triumph ias?}"  />
      <FeatureSection />
      <CommonTittle text="Courses {offered}" />
      <CourseSection />
      <CommonTittle text="Selected {aspirants} feedBacks" />
      <AspirantsSection />
      <CommonTittle text="About {Vikash ranjan} sir" />
      <AboutRanjanSir />
      <ContactSection />
      <AppStoreSection />
      <MessageSection />
    </div>
  );
};

export default HomePage;
