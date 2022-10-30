import React from "react";
import "./Header.css";
// import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import Home from "../../asserts/icon/Home.png";
import Services from "../../asserts/icon/Services.png";
import Cv from "../../asserts/icon/cv.png";
import Portfolio from "../../asserts/icon/Portfolio.png";
import Blog from "../../asserts/icon/Blog.png";
import Contact from "../../asserts/icon/Contact.png";
import Moon from "../../asserts/icon/Contrast.png";

function Header_right() {
  return (
    <div className="">
      {/* menu right */}
      <div>
        <img className="moon" src={Moon} alt="" />
      </div>
      <div className="header_right_icon">
        <div className="tooltip">
          <span className="tooltiptext">Home</span>
          <img className="home" src={Home} alt="Home" />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Services</span>
          <img className="home" src={Services} alt="Services" />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Cv</span>
          <img className="home" src={Cv} alt="Cv" />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Portfolio</span>
          <img className="home" src={Portfolio} alt="Portfolio" />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Blog</span>
          <img className="home" src={Blog} alt="Blog" />
        </div>
        <div className="tooltip">
          <span className="tooltiptext">Contact</span>
          <img className="home" src={Contact} alt="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Header_right;
