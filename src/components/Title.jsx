import React from "react";

const Title = ({ smallTitle, title, className ,mainClassName}) => {
  return (
    <div className={`font-rob text-text-primary capitalize container:px-0 px-2 ${mainClassName} `}>
      <h6 className="text-xl font-semibold ">{smallTitle}</h6>
      <h2 className={`sm:text-[64px] font-bold ${className} `}>{title}</h2>
    </div>
  );
};

export default Title;
