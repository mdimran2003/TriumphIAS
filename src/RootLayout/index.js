import React from "react";
import Header from "../Components/Header";
import Styles from "./index.module.scss";
import FooterSection from "../Components/FooterSection";
import MapSection from "../Components/MapSection";
import { isMobile } from "react-device-detect";
import MenuBar from "../Components/MenuBar";
function RootLayout({ children }) {
  if(isMobile){
    return(
      <div className={Styles.root}>
      <MenuBar/>
      {children}
      <MapSection />
      <FooterSection />
    </div>
    )
  }
  return (
    <div className={Styles.root}>
      <Header />
      {children}
      <MapSection />
      <FooterSection />
    </div>
  );
}

export default RootLayout;
