import React from "react";
import Flex from "./Flex";

const Input = ({ type, labelText }) => {
  return (
    <>
      <Flex className="sm:w-[48%] w-full flex-col font-rob text-text-primary gap-y-3">
        <label htmlFor="" className="text-xl">{labelText}</label>
        <input type={type} className="p-4 rounded-lg border-2 border-primary outline-primary " />
      </Flex>
    </>
  );
};

export default Input;
