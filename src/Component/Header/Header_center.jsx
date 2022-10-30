import React from "react";
import "./Header.css";
import Myour from "../../asserts/img/YourImage1.png";
import Line from "../../asserts/icon/Vector.png";

function Header_center() {
  return (
    <div className="relative flex justify-between">
      <div className="w-2/3 pl-16 pt-20">
        <h1 className="text-5xl font-bold leading-[123%]">
          I’m Rayan Adlrdard <span className="text-orange">Front-end</span>{" "}
          Developer
        </h1>
        <p className="pt-5 pb-6 w-3/4 text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <button className="w-40 h-12 bg-orange text-lg text-center rounded flex flex-row flex-nowrap content-evenly justify-center items-center">
          <span>Hire me</span>
          <img className="pl-2 pt-1" src={Line} alt="button" />
        </button>
      </div>
      <div className="absolute right-12 top-2">
        <img className="" src={Myour} alt="" />
      </div>
    </div>
  );
}

export default Header_center;
