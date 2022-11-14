import React, { useEffect } from "react";
import { useState } from "react";
import data from "./data";
import SliderDetail from "./SliderDetail";

function Slider() {
  const [recom, setRecom] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = recom.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, recom]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  });
  return (
    <div className="relative w-[900px] h-[566px] border mt-24 ml-[22%] mr-[50px]">
      <h1 className="text-center capitalize text-lightBlack font-bold text-3xl font-self">
        recommendations
      </h1>
      <p className="text-center text-grey capitalize font-self text-base w-2/4 mx-auto mt-8 mb-12">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="flex w-[308px] h-[328px] justify-between">
        {recom.map((person, personIndex) => (
          <SliderDetail key={personIndex} {...person} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
