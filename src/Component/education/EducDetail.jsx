import React from "react";

function EducDetail({ id, title, name, derc, time, job }) {
  return (
    <div className="pl-16 pt-6">
      <div className="border-b-2 w-11/12 border-grey border-opacity-20 flex justify-between pb-7">
        <div>
          <h2 className="capitalize font-sans font-medium text-lg pb-4 text-lightBlack">
            {title}
          </h2>
          <div className="flex items-center">
            <h4 className=" text-sm capitalize font-sans text-lightBlack font-normal">
              {job}
            </h4>
            <p className=" ml-8 bg-orange text-white text-[10px] font-sans font-normal text-center w-24 h-4 rounded-sm">
              {time}
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="capitalize font-sans font-medium text-lg pb-4 text-lightBlack">
            {name}
          </h2>
          <p className="w-[536px] h-[100px] capitalize text-grey text-base font-sans font-normal">
            {derc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducDetail;
