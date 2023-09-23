import React from "react";
import Flex from "./layouts/Flex";
import Container from "./layouts/Container";
import Image from "./layouts/Image";
import footerLogo from "../assets/logo.png";
import NavLinks from "./layouts/NavLinks";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#F5FCFF] py-[106px] mt-[150px]">
      <Container>
        <Flex className={"items-center border-b-2 border-[#2829388C] pb-28"}>
          <Image
            src={footerLogo}
            className={"w-[10%]"}
            imgClassName={"w-full"}
          />
          <NavLinks className={"lg:w-3/4"} />
          <Flex className={"gap-x-3  w-[15%] justify-end text-xl "}>
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </Flex>
        </Flex>
        <Flex className={"font-rob text-lg text-black mt-11"}>
          <h6 className="w-1/2">Made with 💖 by Airdokan</h6>
          <Flex className="w-1/2 justify-end gap-x-8 ">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies Settings</a>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
