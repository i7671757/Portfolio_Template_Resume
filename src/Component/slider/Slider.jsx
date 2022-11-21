import React from "react";
import "./slick.min.css";
import "./slick-theme.min.css";
import Slider from "react-slick";
import data from "./data";
import SliderDetail from "./SliderDetail";

function SimpleSlider() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="relative w-[900px] h-[566px] border mt-24 ml-[22%] mr-[50px]">
      <h1 className="text-center capitalize text-lightBlack font-bold text-3xl font-self">
        recommendations
      </h1>
      <p className="text-center text-grey capitalize font-self text-base w-2/4 mx-auto mt-8 mb-12">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <Slider {...setting}>
        {data.map((item) => (
          <div key={item.id} className="">
            <SliderDetail key={item.id} {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
