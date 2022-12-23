import React from "react";

function YInfo() {
  return (
    <div className="absolute w-[570px] h-[755px] left-3/3 ">
      <h1 className="capitalize font-sans font-bold text-3xl text-lightBlack">
        Leave us your info
      </h1>
      <form action="" className="absolute w-full bg-white mt-8 p-6">
        <label
          className="text-grey capitalize text-lg font-medium mb-2"
          for="grid-first-name"
        >
          Your Full Name ( Required)
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-grey border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder=""
        />
        <label
          className="text-grey capitalize text-lg font-medium mb-2"
          for="grid-first-name"
        >
          Your Email ( Required)
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-grey border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="email"
          placeholder=""
        />
        <label
          className="text-grey capitalize text-lg font-medium mb-2"
          for="grid-first-name"
        >
          Subject
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-grey border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder=""
        />
        <label
          className="text-grey capitalize text-lg font-medium mb-2"
          for="message"
        >
          Your message
        </label>
        <textarea className="block w-full h-[210px] bg-gray-200 text-grey focus:outline-none focus:bg-white border rounded py-3 px-4 mb-3 leading-tight "></textarea>

        <button
          type="submit"
          className="uppercase font-sans font-semibold text-sm text-black bg-orange w-[159px] h-[35px]"
        >
          send message
        </button>
      </form>
    </div>
  );
}

export default YInfo;
