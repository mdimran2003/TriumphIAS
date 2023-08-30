import React, { useState } from "react";
import Styles from "./index.module.scss";
import AspirantCard from "./AspirantCard";
import gunjita from "../../Assets/IAS Gunjita Agrawal (2).png";
import pradeep from "../../Assets/IAS Pradeep Singh.png";
import swati from "../../Assets/IAS Swati Sharma (2).png";
import Carousel from "../../common/carousel/Carousel";
const aspirantObj = [
  { img: gunjita, name: "IAS Gunjita Agarwal", rank: "AIR 26 UPSC CSE 2022" },
  { img: pradeep, name: "IAS Pradeep Singh", rank: "AIR 26 UPSC CSE 2019" },
  { img: swati, name: "IAS Swati Sharma", rank: "AIR 26 UPSC CSE 2022" },
];

const AspirantsSection = () => {
  const [activeCardIndex,setActiveCardIndex] = useState(0)
  return (
    <div className={Styles.aspirantArea}>
      <Carousel  gap={0}
          activeCardPosition="center"
          circular
          numberOfCards={5}
          zoomScale={2 / 3}
          handleNavClick={setActiveCardIndex}>

      {aspirantObj.map((item,index) => {
        return <AspirantCard key={index} img={item.img} variant={index === activeCardIndex ? "light" : "dull"} name={item.name} rank={item.rank} />;
      })}
      </Carousel>
     
    </div>
  );
};

export default AspirantsSection;
