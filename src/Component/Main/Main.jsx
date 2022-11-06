import React from "react";
import { servis } from "./datas";
import MainDetaeil from "./MainDetaeil";

function Main() {
  // console.log(servis);
  return (
    <main className="relative w-[900px] h-[653px] border mt-24 ml-[22%] mr-[50px">
      <div className="">
        <h1 className="text-center capitalize text-lightBlack font-bold text-3xl font-self">
          my services
        </h1>
        <p className="text-center text-grey capitalize font-self text-base w-2/4 mx-auto mt-8 mb-12">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
        <div className="grid grid-cols-3 gap-5">
          {servis.map((item) => (
            <div className="h-56 w-72 bg-white drop-shadow-lg">
              <MainDetaeil key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
