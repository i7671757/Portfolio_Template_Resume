import React from "react";
import Stars from "../../assets/icon/Star.png";

function SliderDetail({ id, image, name, title, derc, job, star }) {
  const starsArr = new Array(star).fill("★");
  return (
    <div className="w-[308px] h-[323px] bg-white border-x-[15px] p-6">
      <h4 className="text-orange">{starsArr}</h4>
      <h3>{title}</h3>
      <h5 className="font-sans capitalize font-normal text-grey text-sm w-64 h-20">
        {derc}
      </h5>
      <div className="flex items-center pt-6">
        <img className="pr-6" src={image} alt={title} />
        <div>
          <h3 className="text-lightBlack capitalize text-lg font-medium font-sans">
            {name}
          </h3>
          <h4 className="text-grey capitalize text-base font-normal font-sans">
            {job}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SliderDetail;
