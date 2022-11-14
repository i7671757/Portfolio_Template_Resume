import React from "react";
import Diamond from "./Diamond";
import Gold from "./Gold";
import Silver from "./Silver";

function Plan() {
  return (
    <div className="relative w-[900px] h-[793px] border mt-24 ml-[22%] mr-[50px]">
      <h1 className="text-center capitalize text-lightBlack font-bold text-3xl font-self">
        Price plans
      </h1>
      <p className="text-center text-grey capitalize font-self text-base w-2/4 mx-auto mt-8 mb-12">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="grid grid-cols-3 gap-4">
        <Silver />
        <Gold />
        <Diamond />
      </div>
    </div>
  );
}

export default Plan;
