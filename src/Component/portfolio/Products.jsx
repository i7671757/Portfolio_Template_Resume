import React from "react";
import { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";

function Products({ id, image, category }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      className="mt-12 relative group cursor-pointer" // understood about relative and absolute? yes _))) cool did you undertand it visually? yes thank you welcome any questions? no 
      onMouseLeave={() => setShowInfo(false)}
      onMouseOver={() => setShowInfo(true)}
    >
      <div className="">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="bg-orange w-full h-full items-center absolute left-0 top-0 hidden group-hover:flex">
          <PlusIcon className="inset-0 w-12 m-auto" />
        </div>
    </div>
  );
}

export default Products;
