import React from "react";
import Frame1 from "../../assets/img/Frame-1.png";
import Frame2 from "../../assets/img/Frame-2.png";
import Frame3 from "../../assets/img/Frame-3.png";
import Frame4 from "../../assets/img/Frame.png";

function Footer() {
  return (
    <div className="relative w-[900px] h-[140px] border mt-8 ml-[22%] mr-[50px]">
      <div className="flex justify-between">
        <img src={Frame1} alt="" />
        <img src={Frame2} alt="" />
        <img src={Frame3} alt="" />
        <img src={Frame4} alt="" />
      </div>
      <div className="absolute w-full bg-white h-16 mt-5 ">
        <h2 className="capitalize font-sans text-lightBlack font-normal text-sm text-center mt-6">
          2021 All Rights Reserved.Ojjomedia
        </h2>
      </div>
    </div>
  );
}

export default Footer;
