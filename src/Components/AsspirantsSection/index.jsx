import React from "react";
import Styles from "./index.module.scss";
import AspirantCard from "./AspirantCard";
import gunjita from "../../Assets/IAS Gunjita Agrawal (2).png";
import pradeep from "../../Assets/IAS Pradeep Singh.png";
import swati from "../../Assets/IAS Swati Sharma (2).png";
const aspirantObj = [
  { img: gunjita, name: "IAS Gunjita Agarwal", rank: "AIR 26 UPSC CSE 2022" },
  { img: pradeep, name: "IAS Pradeep Singh", rank: "AIR 26 UPSC CSE 2019" },
  { img: swati, name: "IAS Swati Sharma", rank: "AIR 26 UPSC CSE 2022" },
];

const AspirantsSection = () => {
  return (
    <div className={Styles.aspirantArea}>
      {aspirantObj.map((item) => {
        return <AspirantCard img={item.img} name={item.name} rank={item.rank} />;
      })}
    </div>
  );
};

export default AspirantsSection;
