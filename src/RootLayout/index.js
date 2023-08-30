import React from "react";
import Header from "../Components/Header";
import Styles from "./index.module.scss";
import FooterSection from "../Components/FooterSection";
import MapSection from "../Components/MapSection";

function RootLayout({ children }) {
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
