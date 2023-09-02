import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import Image from "./layouts/Image";
import banner from "../assets/banner.png";
const Banner = () => {
  return (
    <section className="py-[133px] bg-[#F5FCFF]">
      <Container>
        <Flex className="lg:flex-row flex-col px-2 container-:px-0">
          <div className="container:w-1/2 w-full font-rob self-center order-1 lg:mt-14 container:mt-0 mt-8">
            <h6 className="text-text-primary text-xl  font-bold">
              Hey, I am John
            </h6>
            <h1 className="font-bold text-text-primary container:text-[74px] text-4xl sm:text-5xl  my-5 lg:leading-[120%]">
              I create <span className="text-primary">product design</span> and
              brand experience
            </h1>
            <p className="font-normal text-[#1C1E53] text-2xl container:w-[621px] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <a
              href=""
              className="py-5 px-6 capitalize bg-primary text-white inline-block rounded-md mt-[53px]"
            >
              Get In Touch
            </a>
          </div>
          <Image className={"container:w-1/2 w-full lg:order-1 "} src={banner} />
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
