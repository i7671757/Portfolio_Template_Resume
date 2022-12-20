import React from "react";
import local from "../../assets/icon/location.png";
import mail from "../../assets/icon/mail.png";
import mobile from "../../assets/icon/Mobile.png";

function Contact_Info() {
  return (
    <div className="absolute w-[298px] h-[756px] left-2/3">
      <h1 className="capitalize font-sans font-bold mb-8 text-3xl text-lightBlack">
        Contact information
      </h1>
      <div className="relative w-full h-[180px] bg-white mb-[15px]">
        <div className="absolute top-[10%] left-[44%] w-10 h-10 bg-orange rounded-full">
          <img src={local} alt="" className="m-auto py-[25%]" />
        </div>
        <div className="px-5 pt-20">
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
      <div className="relative w-full h-[180px] bg-white mb-[15px] mt-[26px]">
        <div className="absolute top-[10%] left-[44%] w-10 h-10 bg-orange rounded-full">
          <img src={mail} alt="" className="m-auto py-[25%]" />
        </div>
        <div className="px-5 pt-20">
          <div className="flex justify-between">
            <p className="capitalize font-sans font-medium text-sm text-grey pb-2">
              Email:
            </p>{" "}
            <p className="capitalize font-sans font-normal text-sm text-grey">
              Youremail@Gmail.Com
            </p>
          </div>
          <div className="flex justify-between">
            <p className="capitalize font-sans font-medium text-sm text-grey pb-2">
              Skype:
            </p>{" "}
            <p className="capitalize font-sans font-normal text-sm text-grey">
              @Yourusername
            </p>
          </div>
          <div className="flex justify-between">
            <p className="capitalize font-sans font-medium text-sm text-grey">
              Telegram:
            </p>{" "}
            <p className="capitalize font-sans font-normal text-sm text-grey">
              @Yourusername
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[180px] bg-white mb-[15px] mt-[26px]">
        <div className="absolute top-[10%] left-[44%] w-10 h-10 bg-orange rounded-full">
          <img src={mobile} alt="" className="m-auto py-[25%]" />
        </div>
        <div className="px-5 pt-20">
          <div className="flex justify-between">
            <p className="capitalize font-sans font-medium text-sm text-grey pb-2">
              Support Services:
            </p>{" "}
            <p className="capitalize font-sans font-normal text-sm text-grey">
              15369
            </p>
          </div>
          <div className="flex justify-between">
            <p className="capitalize font-sans font-medium text-sm text-grey pb-2">
              Office:
            </p>{" "}
            <p className="capitalize font-sans font-normal text-sm text-grey">
              +58 (021)356 587 235
            </p>
          </div>
          <div className="flex justify-between">
            <p className="capitalize font-sans font-medium text-sm text-grey">
              Personal:
            </p>{" "}
            <p className="capitalize font-sans font-normal text-sm text-grey">
              +58 (021)356 587 235
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Info;
