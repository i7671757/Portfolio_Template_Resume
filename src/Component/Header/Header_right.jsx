import React from "react";
import "./Header.css";
// import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import Home from "../../assets/icon/Home.png";
import Services from "../../assets/icon/Services.png";
import Cv from "../../assets/icon/cv.png";
import Portfolio from "../../assets/icon/Portfolio.png";
import Blog from "../../assets/icon/Blog.png";
import Contact from "../../assets/icon/Contact.png";
import Moon from "../../assets/icon/Contrast.png";

function Header_right() {
  return (
    <div className="">
      {/* menu right */}
      <div>
        <img className="mx-[50px] my-auto w-[25px]" src={Moon} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="tooltip">
          <span className="tooltiptext">Home</span>
          <img
            className="hover:bg-orange my-[25%] mx-auto"
            src={Home}
            alt="Home"
          />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Services</span>
          <img
            className="hover:bg-orange my-[25%] mx-auto"
            src={Services}
            alt="Services"
          />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Cv</span>
          <img className="hover:bg-orange my-[25%] mx-auto" src={Cv} alt="Cv" />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Portfolio</span>
          <img
            className="hover:bg-orange my-[25%] mx-auto"
            src={Portfolio}
            alt="Portfolio"
          />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Blog</span>
          <img
            className="hover:bg-orange my-[25%] mx-auto"
            src={Blog}
            alt="Blog"
          />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Contact</span>
          <img
            className="hover:bg-orange my-[25%] mx-auto"
            src={Contact}
            alt="Contact"
          />
        </div>
      </div>
    </div>
  );
}

export default Header_right;
