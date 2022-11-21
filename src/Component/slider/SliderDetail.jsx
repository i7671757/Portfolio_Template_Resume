import React from "react";
import Stars from "../../assets/icon/Star.png";

function SliderDetail({ id, image, name, title, derc, job, star }) {
  const starsArr = new Array(star).fill("★");
  return (
    <div className="w-[308px] h-[323px] bg-white border-x-[15px] p-2">
      <h4 className="text-orange">{starsArr}</h4>
      <h3>{title}</h3>
      <h5>{derc}</h5>
      <div className="flex">
        <img src={image} alt={title} />
        <div>
          <h3>{name}</h3>
          <h4>{job}</h4>
        </div>
      </div>
    </div>
  );
}

export default SliderDetail;
