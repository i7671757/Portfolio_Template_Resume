import React from "react";
import local from "../../assets/icon/location.png";

function Contact_Info() {
  return (
    <div className="absolute w-[298px] h-[756px] left-2/3">
      <h1 className="capitalize font-sans font-bold mb-8 text-3xl text-lightBlack">
        Contact information
      </h1>
      <div className="w-full h-[180px] bg-white">
        <div className="m-auto block mt-5 w-10 h-10 bg-orange rounded-full ">
          <img src={local} alt="" className="m-auto py-[25%]" />
        </div>

        <div className="p-5 ">
          <div className="flex justify-between">
            <p className="capitalize font-sans font-medium text-sm text-grey pb-2">
              Country:
            </p>{" "}
            <p className="capitalize font-sans font-normal text-sm text-grey">
              Bangladesh
            </p>
          </div>
          <div className="flex justify-between">
            <p className="capitalize font-sans font-medium text-sm text-grey pb-2">
              City:
            </p>{" "}
            <p className="capitalize font-sans font-normal text-sm text-grey">
              Dhaka
            </p>
          </div>
          <div className="flex justify-between">
            <p className="capitalize font-sans font-medium text-sm text-grey">
              Streat:
            </p>{" "}
            <p className="capitalize font-sans font-normal text-sm text-grey">
              35 Vhatara, Badda
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[180px] bg-white">
        <div className="m-auto block mt-5 w-10 h-10 bg-orange rounded-full ">
          <img src={local} alt="" className="m-auto py-[25%]" />
        </div>
      </div>
    </div>
  );
}

export default Contact_Info;
