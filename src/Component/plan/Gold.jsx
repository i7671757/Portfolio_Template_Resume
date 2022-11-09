import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

function Gold() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      className="w-72 h-[580px] bg-white hover:shadow-2xl"
      onMouseLeave={() => setShowInfo(false)}
      onMouseOver={() => setShowInfo(true)}
    >
      <div className={`${showInfo ? "visible" : "hidden"}`}>
        <h5 className="absolute w-72 bg-orange text-center capitalize">
          Most popular
        </h5>
      </div>
      <h2 className="font-medium text-2xl mt-10 mb-3 text-center font-sans capitalize text-lightBlack">
        Gold
      </h2>
      <h1 className="text-center text-4xl font-bold font-sans  capitalize text-lightBlack">
        $50.00<span className="font-thin text-lg font-sans ">/Hour</span>
      </h1>
      <p className="w-3/4 mx-auto text-center font-sans font-normal text-sm capitalize text-grey mt-6 mb-4">
        For most businesses that want to optimize web queries
      </p>
      <div className="flex flex-col ml-[33px]">
        <div>
          <CheckIcon className="h-6 w-6 m-auto text-orange float-left mb-4 mr-1" />
          <h4 className="text-grey">UI Design</h4>
        </div>
        <div>
          <CheckIcon className="h-6 w-6 m-auto text-orange float-left mb-4 mr-1" />
          <h4 className="text-grey">Web Development</h4>
        </div>
        <div>
          <CheckIcon className="h-6 w-6 m-auto text-orange float-left mb-4 mr-1" />
          <h4 className="text-grey">Logo Design</h4>
        </div>
        <div>
          <CheckIcon className="h-6 w-6 m-auto text-orange float-left mb-4 mr-1" />
          <h4 className="text-grey">Seo Optimization</h4>
        </div>
        <div>
          <XMarkIcon className="h-6 w-6 m-auto text-grey float-left mb-4 mr-1" />
          <h4 className="text-grey">WordPress Integration</h4>
        </div>
        <div>
          <XMarkIcon className="h-6 w-6 m-auto text-grey float-left mb-4 mr-1" />
          <h4 className="text-grey">5 Websites</h4>
        </div>
        <div>
          <XMarkIcon className="h-6 w-6 m-auto text-grey float-left mb-4 mr-1" />
          <h4 className="text-grey">Unlimited User</h4>
        </div>
        <div>
          <XMarkIcon className="h-6 w-6 m-auto text-grey float-left mb-4 mr-1" />
          <h4 className="text-grey">20 gB bandwith</h4>
        </div>
      </div>

      <div className="text-center mt-1">
        <button
          className={`${
            showInfo ? "bg-orange" : "bg-white"
          } m-auto h-10 w-40 rounded-3xl shadow-xl font-sans font-bold text-sm capitalize text-lightBlack`}
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

export default Gold;
