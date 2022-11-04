import React from "react";
import Profile from "../../assets/img/Profile.png";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { AiOutlineDribbble } from "react-icons/ai";
import SkillsIcon from "../../assets/icon/skills_Icons.png";
import { BiDownload } from "react-icons/bi";

function Header_left() {
  return (
    <div className="absolute top-0 left-0 bg-white w-56 h-[1150px]">
      <div className="mx-8 m-5 mt-8">
        {/* <h2>header-left</h2> */}
        <img className="" src={Profile} alt="" />
        <h3 className="font-self font-medium leading-relaxed text-center capitalize py-1">
          Royan Adlardard
        </h3>
        <h5 className="font-self font-normal leading-relaxed text-center capitalize">
          Front-end Developer
        </h5>
        <div className="flex justify-between pt-3">
          <GrFacebookOption className="rounded-full w-5 h-5 p-1 bg-orange" />
          <AiFillInstagram className="rounded-full w-5 h-5 p-1 bg-orange" />
          <AiOutlineTwitter className="rounded-full w-5 h-5 p-1 bg-orange" />
          <FaLinkedinIn className="rounded-full w-5 h-5 p-1 bg-orange" />
          <GrYoutube className="rounded-full w-5 h-5 p-1 bg-orange" />
          <AiOutlineDribbble className="rounded-full w-5 h-5 p-1 bg-orange" />
        </div>
      </div>
      <div className="border-t-2 m-5 pt-5">
        <div className="flex justify-between">
          <h5 className="bg-orange px-1">Age:</h5>
          <p className="text-sm py-1">24</p>
        </div>
        <div className="flex justify-between">
          <h5 className="bg-orange px-1">Rasidence:</h5>
          <p className="text-sm py-1">BD</p>
        </div>
        <div className="flex justify-between">
          <h5 className="bg-orange px-1">Freelance:</h5>
          <p className="text-sm py-1 text-lime-600">Available</p>
        </div>
        <div className="flex justify-between">
          <h5 className="bg-orange px-1">Address:</h5>
          <p className="text-sm py-1">Dhaka,Bangladesh</p>
        </div>
      </div>
      {/* languages */}
      <div className="m-5 border-t-2">
        <h3 className="pt-3 font-self font-medium text-black">Languages</h3>
        <div className="pt-1 pb-1 flex justify-between font-self font-normal text-grey">
          <h5>Bange</h5>
          <h5>100%</h5>
        </div>
        <div className="border w-[100%] border-orange p-[2px] rounded-md">
          <div className="bg-orange rounded-lg p-[1px] w-[100%]"></div>
        </div>
        <div className="pt-1 pb-1 flex justify-between font-self font-normal text-grey">
          <h5>English</h5>
          <h5>80%</h5>
        </div>
        <div className="border w-[100%] border-orange p-[2px] rounded-md">
          <div className="bg-orange rounded-lg p-[1px] w-[80%]"></div>
        </div>
        <div className="pt-1 pb-1 flex justify-between font-self font-normal text-grey">
          <h5>Spanish</h5>
          <h5>60%</h5>
        </div>
        <div className="border w-[100%] border-orange p-[2px] rounded-md">
          <div className="bg-orange rounded-lg p-[1px] w-[60%]"></div>
        </div>
      </div>
      {/* Skills */}
      <div className="m-5 border-t-2">
        <h3 className="pt-3 font-self font-medium text-black">Skills</h3>
        <div className="pt-1 pb-1 flex justify-between font-self font-normal text-grey">
          <h5>Html</h5>
          <h5>90%</h5>
        </div>
        <div className="border w-[100%] border-orange p-[2px] rounded-md">
          <div className="bg-orange rounded-lg p-[1px] w-[90%]"></div>
        </div>
        <div className="pt-1 pb-1 flex justify-between font-self font-normal text-grey">
          <h5>CSS</h5>
          <h5>85%</h5>
        </div>
        <div className="border w-[100%] border-orange p-[2px] rounded-md">
          <div className="bg-orange rounded-lg p-[1px] w-[85%]"></div>
        </div>
        <div className="pt-1 pb-1 flex justify-between font-self font-normal text-grey">
          <h5>Js</h5>
          <h5>80%</h5>
        </div>
        <div className="border w-[100%] border-orange p-[2px] rounded-md">
          <div className="bg-orange rounded-lg p-[1px] w-[80%]"></div>
        </div>
        <div className="pt-1 pb-1 flex justify-between font-self font-normal text-grey">
          <h5>PHP</h5>
          <h5>75%</h5>
        </div>
        <div className="border w-[100%] border-orange p-[2px] rounded-md">
          <div className="bg-orange rounded-lg p-[1px] w-[75%]"></div>
        </div>
        <div className="pt-1 pb-1 flex justify-between font-self font-normal text-grey">
          <h5>WordPress</h5>
          <h5>85%</h5>
        </div>
        <div className="border w-[100%] border-orange p-[2px] rounded-md">
          <div className="bg-orange rounded-lg p-[1px] w-[85%]"></div>
        </div>
      </div>
      {/* extra Skills */}
      <div className="m-5 border-t-2">
        <h3 className="pt-3 font-self font-medium text-black">Extra Skills</h3>
        <div className="flex items-center py-1">
          <img src={SkillsIcon} alt="Skills" className="float-left pr-2" />{" "}
          <p className="text-grey font-normal capitalize">
            Bootstrap, Materialize
          </p>
        </div>
        <div className="flex items-center py-1">
          <img src={SkillsIcon} alt="Skills" className="float-left pr-2" />{" "}
          <p className="text-grey font-normal capitalize">Stylus, Sass, less</p>
        </div>
        <div className="flex items-center py-1">
          <img src={SkillsIcon} alt="Skills" className="float-left pr-2" />{" "}
          <p className="text-grey font-normal capitalize">
            Gulp, Webpack, Grunt
          </p>
        </div>
        <div className="flex items-center py-1">
          <img src={SkillsIcon} alt="Skills" className="float-left pr-2" />{" "}
          <p className="text-grey font-normal capitalize">Git Knowledge</p>
        </div>
      </div>
      <div className="m-5 border-t-2">
        {" "}
        <button className="mt-3 flex justify-between items-center w-full px-5 py-2 h-10 text-lightBlack bg-orange">
          <h4 className="font-self font-medium text-lightBlack">Download CV</h4>{" "}
          <BiDownload />
        </button>
      </div>
    </div>
  );
}

export default Header_left;
