import React from "react";
import { useState } from "react";
function MainDetaeil({ id, title, image, derc }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      className=""
      onMouseLeave={() => setShowInfo(false)}
      onMouseOver={() => setShowInfo(true)}
    >
      <div className="hover:invisible">
        <img className="m-auto text-blue my-6" src={image} alt="" />
        <h3 className="capitalize text-base text-lightBlack font-medium font-sans text-center">
          {title}
        </h3>
        <h5 className="text-grey capitalize font-normal text-sm text-center mt-4">
          {derc}
        </h5>
      </div>
      <div
        className={`absolute top-0 h-56 w-72 bg-white ${
          showInfo ? "visible" : "hidden"
        }`}
      >
        {/* <div className="hover:visible invisible"> */}
        <h3 className="mt-8 capitalize text-base text-lightBlack font-medium font-sans text-center">
          {title}
        </h3>
        <h5 className="text-grey capitalize font-normal text-sm text-center mx-auto mt-6 w-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
          diam in ac dictum a urna viverra morbi.{" "}
        </h5>
        <button className="mt-4 text-orange font-bold text-xs w-full text-center">
          ORDER NOW {">"}
        </button>
      </div>
    </div>
  );
}

export default MainDetaeil;
