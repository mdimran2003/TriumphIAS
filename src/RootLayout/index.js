import React from "react";
import Header from "../Components/Header";
import FooterSection from "../Components/FooterSection";
import MapSection from "../Components/MapSection";
import { isMobile } from "react-device-detect";
import MenuBar from "../Components/MenuBar";
function RootLayout({ children }) {
  if (isMobile) {
    return (
      <div>
        <MenuBar />
        {children}
        <MapSection />
        <FooterSection />
      </div>
    );
  }
  return (
    <div>
      {!isMobile && <Header />}
      {children}
      <MapSection />
      <FooterSection />
    </div>
  );
}

export default RootLayout;
