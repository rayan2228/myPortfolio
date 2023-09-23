import React from "react";

const NavLinks = ({className}) => {
  return (
    <ul className={`flex flex-col lg:flex-row absolute lg:relative top-[58px] sm:top-[82px] lg:top-0   justify-center lg:gap-x-11 gap-y-6 lg:gap-y-0 lg:p-0 p-4 lg:items-center  font-rob text-xl font-normal capitalize w-full lg:bg-transparent bg-[#0e0e0e] text-white lg:text-black ${className}`}>
      <li>
        <a
          href=""
          className="hover:text-primary transition duration-300 w-full inline-block lg:inline lg:w-auto"
        >
          home
        </a>
      </li>
      <li>
        <a
          href=""
          className="hover:text-primary transition duration-300 w-full inline-block lg:inline lg:w-auto"
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href=""
          className="hover:text-primary transition duration-300 w-full inline-block lg:inline lg:w-auto"
        >
          About me
        </a>
      </li>
      <li>
        <a
          href=""
          className="hover:text-primary transition duration-300 w-full inline-block lg:inline lg:w-auto"
        >
          Testimonials
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
