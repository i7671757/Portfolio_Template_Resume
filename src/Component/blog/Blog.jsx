import React from "react";
import { blog } from "./data";
import Post1 from "./Post1";

function Blog() {
  return (
    <div className="relative w-[900px] h-[665px] border mt-24 ml-[22%] mr-[50px] top-16">
      <h1 className="text-center capitalize text-lightBlack font-bold text-3xl font-self">
        Blog
      </h1>
      <p className="text-center text-grey capitalize font-self text-base w-2/4 mx-auto mt-8 mb-12">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="grid grid-cols-3 gap-3">
        {blog.map((item) => (
          <div key={item.id}>
            <Post1 {...item} className="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
