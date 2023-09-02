import React from "react";
import Styles from "./index.module.scss";
const NavBar = () => {
  return (
    <div className={Styles.navArea}>
      <ul>
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
          <a href="/SociologyPage"> Sociology </a>
        </li>

        <li>Essay</li>
        <li>Gs</li>
        <li>Test Series</li>
        <li>Blogs</li>
      </ul>
    </div>
  );
};

export default NavBar;
