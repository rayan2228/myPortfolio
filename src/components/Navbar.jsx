import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import NavLinks from "./layouts/NavLinks";
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
          {showMenu && <NavLinks className={"lg:w-6/12"} />}
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
