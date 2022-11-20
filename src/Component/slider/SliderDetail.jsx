import React from "react";

function SliderDetail({ id, image, name, title, derc, job, star }) {
  return (
    <div className="w-[308px] h-[323px] bg-white border-x-[15px]" key={id}>
      <div className="">
        <h3>{title}</h3>
        <h3>{name}</h3>
        <h5>{derc}</h5>
      </div>
    </div>
  );
}

export default SliderDetail;
