import React from "react";
import Image from "./layouts/Image";
import { FiArrowUpRight } from "react-icons/fi";
const Project = ({ projectImage, projectName, projectDetails }) => {
  return (
    <div className="w-full lg:w-[32%] font-rob rounded-lg shadow-project-shadow">
      <Image src={projectImage} imgClassName={"w-full"} />
      <div className="p-8">
        <h2 className=" text-[32px] text-text-primary font-bold">
          {projectName}
        </h2>
        <p className="font-normal text-[#1C1E53] text-xl leading-8 mt-3 mb-8">
          {projectDetails}
        </p>
        <a
          href=""
          className="text-lg font-semibold border-b-2 border-primary pb-3"
        >
          View In Dribbble <FiArrowUpRight className="inline-block" />
        </a>
      </div>
    </div>
  );
};

export default Project;
