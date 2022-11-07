import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

function Diamond() {
  return (
    <div className="w-[300px] h-[580px] bg-white">
      <h2 className="text-center">Diamond</h2>
      <h1 className="text-center">
        $80.00<span>/Hour</span>
      </h1>
      <p className="w-3/4 mx-auto text-center">
        For most businesses that want to optimize web queries
      </p>
      <div className="flex flex-col ">
        <div>
          <CheckIcon className="h-6 w-6 m-auto text-orange float-left" />
          <h4 className="text-grey">UI Design</h4>
        </div>
        <div>
          <CheckIcon className="h-6 w-6 m-auto text-orange float-left" />
          <h4 className="text-grey">Web Development</h4>
        </div>
        <div>
          <XMarkIcon className="h-6 w-6 m-auto text-grey float-left" />
          <h4 className="text-grey">Logo Design</h4>
        </div>
        <div>
          <XMarkIcon className="h-6 w-6 m-auto text-grey float-left" />
          <h4 className="text-grey">Seo Optimization</h4>
        </div>
        <div>
          <XMarkIcon className="h-6 w-6 m-auto text-grey float-left" />
          <h4 className="text-grey">WordPress Integration</h4>
        </div>
        <div>
          <XMarkIcon className="h-6 w-6 m-auto text-grey float-left" />
          <h4 className="text-grey">5 Websites</h4>
          <div>
            <XMarkIcon className="h-6 w-6 m-auto text-grey float-left" />
            <h4 className="text-grey">Unlimited User</h4>
          </div>
          <div>
            <XMarkIcon className="h-6 w-6 m-auto text-grey float-left" />
            <h4 className="text-grey">20 gB bandwith</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diamond;
