import React from "react";
import Stars from "../../assets/icon/Star.png";

function SliderDetail({ id, image, name, title, derc, job, star }) {
  const starsArr = new Array(star).fill("★");
  return (
    <div className="w-[308px] h-[323px] bg-white border-x-[15px] p-6">
      <h4 className="text-orange pb-2">{starsArr}</h4>
      <h3 className="font-sans capitalize font-medium text-lg pb-2">{title}</h3>
      <h5 className="font-sans capitalize font-normal text-grey text-sm pb-4">
        {derc}
      </h5>
      <div className="flex items-center pt-6">
        <img className="pr-6" src={image} alt={title} />
        <div>
          <h3 className="text-lightBlack capitalize font-medium font-sans text-base">
            {name}
          </h3>
          <h4 className="text-grey capitalize font-normal font-sans text-sm">
            {job}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SliderDetail;
