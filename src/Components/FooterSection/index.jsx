import React from "react";
import Style from "./index.module.scss";
import FooterList from "./FooterList";
import Logo from "../../Assets/logo (1).png";
import whatsapp from "../../Assets/Whatsapp Icon.png";
import youtube from "../../Assets/Youtube icon.png";
import telegram from "../../Assets/Telegram Icon.png";
import instagram from "../../Assets/Instagram Icon.png";
import facebook from "../../Assets/Facebook Icon.png";
import quoro from "../../Assets/Quora Icon.png";
const FooterSection = () => {
  return (
    <div className={Style.footerArea}>
      <span className={Style.footerArea__logo}>
        <img src={Logo} alt="error" />
      </span>
      <div className={Style.footerArea__flexBox}>
        <div className={Style.footerArea__flexBox__courses}>
          <FooterList li1="Home" li2="Home" li3="Course" li4="Video" />
          <FooterList li1="Sociology" li2="Sociology Syllabus" li3="Sociology Planner" li4="Sociology Brouchure" li5="Sugested Books" />
          <FooterList li1="General Studies" li2="Gs Prelims Syllabus" li3="Gs Mains Syllabus" li4="Gs Brochure" />
          <FooterList li1="Essay" li2="Essay Planner" li3="Essay Writing" li4="Essay Brochure" />
        </div>
        <div className={Style.footerArea__flexBox__contactSocialmedia}>
          <div className={Style.footerArea__flexBox__contactSocialmedia__address}>
            <ul>
              <li>+91 7840888102</li>
              <li>+91 7678628820</li>
              <li>+91 9667874704</li>
            </ul>
            <h4>info @ triumphias.com</h4>
            <p>23-B,3rd Floor, pusha Road, Metro</p>
            <p>Pillar No. 114, Old Rajinder </p>
            <p>Nagar, New Delhi, 110060</p>
          </div>
          <div className={Style.footerArea__flexBox__socialLink}>
            <ul>
              <li>
                <img src={whatsapp} alt="error" />
              </li>
              <li>
                <img src={youtube} alt="error" />
              </li>
              <li>
                <img src={telegram} alt="error" />
              </li>
              <li>
                <img src={instagram} alt="error" />
              </li>
              <li>
                <img src={facebook} alt="error" />
              </li>
              <li>
                <img src={quoro} alt="error" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
