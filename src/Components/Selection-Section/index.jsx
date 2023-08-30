import React from "react";
import Styles from "./index.module.scss";
import SelectionCard from "./Selection-Item";
import arnavMishra from "../../Assets/IAS Arnav Mishra.png";
import swatiSharma from "../../Assets/IAS Swati Sharma.png";
import gunjita from "../../Assets/IAS Gunjita Agrawal.png";
import aditi from "../../Assets/IAS Aditi Varshney.png";
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
const SelectionSection = () => {
  return (
    <div className={Styles.selectionArea}>
      {selectionObj.map((item, index) => {
        return <SelectionCard key={index} imgUrl={item.img} name={item.name} />;
      })}
    </div>
  );
};

export default SelectionSection;
