import React from "react";
import { isMobile } from "react-device-detect";
import Styles from "./index.module.scss";
import playStore from "../../Assets/Play Store.png";
import appleStore from "../../Assets/App Store.png";
import mobile from "../../Assets/Mobile App.png";
const AppStoreSection = () => {
  if (isMobile) {
    return (
      <>
        {" "}
        <div className={Styles.storeArea}>
          <div className={Styles.storeArea__inputArea}>
            <h2>The Most Trusted Institude by Toppers for UPSC</h2>
            <p className={Styles.storeArea__inputArea__para}>Get the Triumph IAS Learning App Today</p>
            <input type="text" placeholder="Enter Your Phone Number" />
            <p className={Styles.storeArea__inputArea__message}>We will send you a link, open it your phone to download app</p>
          </div>
          <div className={Styles.storeArea__phoneBox}>
            <img src={mobile} alt="error" />
          </div>
        </div>
        <div className={Styles.storeArea__inputArea__storeLink}>
          <div className={Styles.storeArea__inputArea__storeLink__playStore}>
            <img src={playStore} alt="error" />
          </div>
          <div className={Styles.storeArea__inputArea__storeLink__appStore}>
            <img src={appleStore} alt="error" />
          </div>
        </div>
      </>
    );
  }
  return (
    <div className={Styles.storeArea}>
      <div className={Styles.storeArea__inputArea}>
        <h2>The Most Trusted Institude by Toppers for UPSC</h2>
        <p className={Styles.storeArea__inputArea__para}>Get the Triumph IAS Learning App Today</p>
        <input type="text" placeholder="Enter Your Phone Number" />
        <p className={Styles.storeArea__inputArea__message}>We will send you a link, open it your phone to download app</p>
        <div className={Styles.storeArea__inputArea__storeLink}>
          <div className={Styles.storeArea__inputArea__storeLink__playStore}>
            <img src={playStore} alt="error" />
          </div>
          <div className={Styles.storeArea__inputArea__storeLink__appStore}>
            <img src={appleStore} alt="error" />
          </div>
        </div>
      </div>
      <div className={Styles.storeArea__phoneBox}>
        <img src={mobile} alt="error" />
      </div>
    </div>
  );
};

export default AppStoreSection;
