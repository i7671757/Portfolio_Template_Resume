import React from "react";
import Contact_Info from "./Contact_Info";
import YInfo from "./YInfo";

function Contact() {
  return (
    <div className="relative w-[900px] h-[665px] border mt-24 ml-[22%] mr-[50px] top-16 flex">
      <YInfo />
      <Contact_Info />
    </div>
  );
}

export default Contact;
