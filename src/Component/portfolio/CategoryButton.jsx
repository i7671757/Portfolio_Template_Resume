import React from "react";

function CategoryButton({ btnName, filterHandler }) {
  return (
    <button
      className="px-5 capitalize hover:text-orange"
      onClick={() => filterHandler(btnName)}
    >
      {btnName}
    </button>
  );
}

export default CategoryButton;
