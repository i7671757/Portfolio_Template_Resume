import React from "react";

function Products({ id, image, category }) {
  return (
    <div>
      <img src={image} alt="" className="hover:bg-orange" />
    </div>
  );
}

export default Products;
