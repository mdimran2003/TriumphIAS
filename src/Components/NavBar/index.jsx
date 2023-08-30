import React from "react";
import Styles from "./index.module.scss";
const NavBar = () => {
  return (
    <div className={Styles.navArea}>
      <ul>
        <li>Home</li>
        <li>Sociology</li>
        <li>Essay</li>
        <li>Gs</li>
        <li>Test Series</li>
        <li>Blogs</li>
      </ul>
    </div>
  );
};

export default NavBar;
