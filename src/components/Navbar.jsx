import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  let [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const handleMenu = () => {
      if (window.innerWidth < 1024) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    handleMenu();
    window.addEventListener("resize", handleMenu);
  }, []);

  return (
    <nav className=" py-6 shadow-nav-shadow ">
      <div className="max-w-container  m-auto">
        <div className="flex items-center lg:justify-around container:justify-between relative">
          <div className="lg:w-2/12 w-[40%] ">
            <picture>
              <img src={logo} alt="" />
            </picture>
          </div>
          {showMenu && (
            <ul className="flex flex-col lg:flex-row absolute lg:relative top-[58px] sm:top-[82px] lg:top-0 lg:w-6/12  justify-center lg:gap-x-11 gap-y-6 lg:gap-y-0 lg:p-0 p-4 lg:items-center  font-rob text-xl font-normal capitalize w-full lg:bg-transparent bg-[#0e0e0e] text-white lg:text-black ">
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
          )}
          {showMenu && (
            <div className="absolute lg:relative top-[280px] sm:top-[300px] lg:top-0 font-rob text-xl font-normal capitalize border-2 border-primary rounded-md w-full lg:w-auto ">
              <a
                href=""
                className="py-[18px] lg:px-[42px] px-4 text-primary inline-block w-full lg:w-auto"
              >
                Contact Me
              </a>
            </div>
          )}
          <div
            className="absolute top-0 right-4 lg:hidden visible text-3xl cursor-pointer sm:translate-y-2/4"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
