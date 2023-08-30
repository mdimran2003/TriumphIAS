import React from "react";
import Styles from "./index.module.scss";
import FeatureItem from "./Feature-Item";
import offlineClass from "../../Assets/Online _ Offline Classroom Program.png";
import study from "../../Assets/Consolidated Study Material.png";
import mains from "../../Assets/Mains Test Series - 2024.png";
const featureObj = [
  {
    img: offlineClass,
    featureType: "Online/Offline Classroom Program",
    byName: "by Vikas Ranjan Sir",
  },
  {
    img: study,
    featureType: "Consolidated Study Material",
    byName: "Four Every Course",
  },
  {
    img: mains,
    featureType: "Mains Text Series - 2024",
    byName: "For Sociology & Essay",
  },
];
const FeatureSection = () => {
  return (
    <div className={Styles.featureSection}>
      {featureObj.map((itme, index) => {
        return <FeatureItem key={index} para={itme.featureType} byName={itme.byName} img={itme.img} />;
      })}
    </div>
  );
};

export default FeatureSection;
