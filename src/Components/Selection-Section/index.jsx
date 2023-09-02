import React, { useState } from "react";
import Styles from "./index.module.scss";
import SelectionCard from "./Selection-Item";
import arnavMishra from "../../Assets/IAS Arnav Mishra.png";
import swatiSharma from "../../Assets/IAS Swati Sharma.png";
import gunjita from "../../Assets/IAS Gunjita Agrawal.png";
import aditi from "../../Assets/IAS Aditi Varshney.png";
import Carousel from "../../common/carousel/Carousel";
const selectionObj = [
  {
    img: arnavMishra,
  },
  {
    img: swatiSharma,
  },
  {
    img: gunjita,
  },
  {
    img: aditi,
  },
];
const SelectionSection = ({isMobile}) => {

  const [activeCardIndex,setActiveCardIndex] = useState(0)
  return (
    <div className={Styles.selectionArea}>

        <Carousel
          gap={0}
          activeCardPosition="center"
          circular
          numberOfCards={ isMobile ? 2 : 5}
          zoomScale={2 / 3}
          handleNavClick={setActiveCardIndex}
        >
          {selectionObj.map((item, index) => {
        return <SelectionCard key={index}  variant={index === activeCardIndex ? "light" : "dull"} imgUrl={item.img} name={item.name} />;
      })}
        </Carousel>
      
    </div>
  );
};

export default SelectionSection;
