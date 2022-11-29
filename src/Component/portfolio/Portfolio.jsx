import React, { useEffect } from "react";
import { useState } from "react";
import data from "./data";
import axios from "axios";
import CategoryButton from "./CategoryButton";
import Products from "./Products";

function Portfolio() {
  const [sity, setSity] = useState([]);
  const [filteredDates, setFilteredDates] = useState([]);

  useEffect(() => {
    axios.get(data).then((res) => {
      setSity(res.sity);
      setFilteredDates(res.sity);
    });
  }, []);

  const btns = [
    "all categories",
    "ul design",
    "web templates",
    "logo",
    "branding",
  ];
  const filterHandler = (btnName) => {
    if (btnName === "all categories") {
      setFilteredDates(data);
      return;
    }
    const filtered = data.filter((item) => item.category === btnName);
    setFilteredDates(filtered);
  };
  return (
    <div className="relative w-[900px] h-[1195px] border mt-24 ml-[22%] mr-[50px]">
      <h1 className="text-center capitalize text-lightBlack font-bold text-3xl font-self">
        Portfolio
      </h1>
      <p className="text-center text-grey capitalize font-self text-base w-2/4 mx-auto mt-8 mb-12">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="text-lightBlack font-medium text-lg font-sans text-center capitalize mx-4">
        {btns.map((btn, index) => (
          <CategoryButton
            filterHandler={filterHandler}
            key={index}
            btnName={btn}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredDates.map((element) => (
          <Products key={element.id} element={element} {...element} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
