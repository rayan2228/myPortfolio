import React from "react";
import Image from "./layouts/Image";
const Skills = ({ src, details, title }) => {
  return (
    <div className="font-rob p-8 bg-[#F5FCFF] container:w-[23%] sm:w-[47%] w-[92%] rounded-xl hover:border-primary border-b-4 border-transparent ease-linear duration-100">
      <div className="p-3 bg-white inline-block">
        <Image src={src} />
      </div>
      <h2 className="font-bold text-[32px] text-text-primary mt-8 mb-5">{title}</h2>
      <p className="font-normal text-xl text-[#1C1E53] leading-8">{details}</p>
    </div>
  );
};

export default Skills;
