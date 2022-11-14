import React from "react";

function SliderDetail({ id, image, name, title, derc, job, star }) {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>{derc}</p>
      <img src={image} alt={title} />
      <h3>{name}</h3>
      <h5>{job}</h5>
    </div>
  );
}

export default SliderDetail;
