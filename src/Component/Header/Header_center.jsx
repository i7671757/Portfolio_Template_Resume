import React from "react";
import "./Header.css";
import Myour from "../../asserts/img/YourImage1.png";
import Line from "../../asserts/icon/Vector.png";

function Header_center() {
  return (
    <div className="relative flex justify-between">
      <div>
        <h1>
          I’m Rayan Adlrdard <span>Front-end</span> Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <button>
          Hire me <img src={Line} alt="" />
        </button>
      </div>
      <div className="">
        <img className="position left-{583px} top-{6px}" src={Myour} alt="" />
      </div>
    </div>
  );
}

export default Header_center;
