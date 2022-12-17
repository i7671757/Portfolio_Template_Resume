import React from "react";
// import PostImg from "../../assets/img/Image.png";
function Post1({ image, title, desc }) {
  return (
    <div className="w-[290px] h-[474px] bg-white">
      <img src={image} alt="" />
      <h1 className="capitalize font-sans font-medium text-lg p-4 text-lightBlack">
        {title}
      </h1>
      <p className="capitalize font-sans px-4 text-base font-normal text-grey">
        {desc}
      </p>
      <button className="capitalize text-orange font-sans font-medium text-lg pl-4 pt-4">
        Learn more {">"}
      </button>
    </div>
  );
}

export default Post1;
