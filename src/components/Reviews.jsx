import React from "react";
import { AiFillStar } from "react-icons/ai";
import Flex from "./layouts/Flex";
import Image from "./layouts/Image";

const Reviews = ({review,name,companyName,img}) => {
  return (
    <div className="w-[31%] p-[42px] border-2 border-[#006B6A] font-rob">
      <Flex className="text-[#006B6A] text-2xl">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </Flex>
      <p className="font-normal text-xl text-[#1C1E53] leading-8 my-[42px]">
       {review}
      </p>
      <Flex className={"gap-x-5 items-center"}>
        <Image src={img} className={"w-[74px] rounded-full"} imgClassName={"w-full"}/>
        <div className="text-xl">
          <h4 className="font-semibold text-text-primary">{name}</h4>
          <h5 className="text-[#1C1E53] font-normal">{companyName}</h5>
        </div>
      </Flex>
    </div>
  );
};

export default Reviews;
