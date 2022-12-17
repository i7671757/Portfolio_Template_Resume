import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

function Products({ id, image, category }) {
  return (
    <div
      className="mt-12 relative"
      onMouseLeave={() => setShowInfo(false)}
      onMouseOver={() => setShowInfo(true)}
    >
      <div className=" w-[310px] h-[300px]">
        <img src={image} alt="" className="absolute" />
        <div className="hover:bg-orange">
          <PlusIcon className="absolute inset-0 hover:bg-orange w-12 m-auto p-full " />
        </div>
      </div>
    </div>
  );
}

export default Products;
