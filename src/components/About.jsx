import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import Image from "./layouts/Image";
import about from "../assets/about.png";
import Title from "./Title";
const About = () => {
  return (
    <section className="lg:mt-[284px] mt-48 px-2 container:px-0">
      <Container>
        <Flex className={"gap-x-[114px] flex-col lg:flex-row "}>
          <Image src={about} className={"lg:w-[45%] w-full "} />
          <div className="lg:w-[45%] w-full self-center mt-8 lg:mt-0">
            <Title smallTitle={"about"} title={"About Me"} className={"text-5xl"} />
           <div className="font-rob text-2xl font-normal text-[#1C1E53] leading-9 container:w-[821px] w-full mt-8">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
            <p className="mt-12">Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
           </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
