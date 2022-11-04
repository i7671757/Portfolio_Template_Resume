import React from "react";
import "./Header.css";
import Header_center from "./Header_center";
import Header_left from "./Header_left";
import Header_right from "./Header_right";

function Header() {
  return (
    <div className="relative">
      <div className="fixed w-[90px] h-[1315px] right-0 top-0 bg-white">
        <Header_right />
      </div>
      <div className="main_menu">
        <Header_center />
      </div>
      <div className="">
        <Header_left />
      </div>
    </div>
  );
}

export default Header;
