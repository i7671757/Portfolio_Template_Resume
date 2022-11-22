import React from "react";

function EducDetail({ id, title, name, derc, time }) {
  return (
    <div className="pl-9 pt-12">
      <div className=" border   divide-y divide-yellow-200">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default EducDetail;
