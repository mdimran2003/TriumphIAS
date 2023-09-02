import React from "react";
import Styles from "./index.module.scss";
import logo from "../../Assets/logo (1).png";
import NavBar from "../NavBar";
import MenuBar from "../MenuBar";
const Header = () => {
  return (<>
    <div className={Styles.headerArea}>
      <div className={Styles.headerArea__logo}>
        <img src={logo} alt="error" />
      </div>
      <div className={Styles.headerArea__navBar}>
        <NavBar />
      </div>
    </div>
    {/* <MenuBar/> */}
  </>
  );
};

export default Header;
