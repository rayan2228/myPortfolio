import React from "react";
import Container from "./layouts/Container";
import Title from "./Title";
import Flex from "./layouts/Flex";
import { BsDribbble } from "react-icons/bs";
import Project from "./Project";
import project1 from "../assets/project(1).png";
import project2 from "../assets/project(2).png";
import project3 from "../assets/project(3).png";
const Portfolio = () => {
  return (
    <section className="mt-[208px]">
      <Container>
        <Flex className={"items-center justify-between"}>
          <Title smallTitle={"Recent Projects"} title={"My Portfolio"} />
          <a href="" className="bg-[#E62872] py-3 px-5 rounded-xl text-white">
            <BsDribbble className="inline-block mr-4 font-rob text-xl font-normal"/>
            Visit My Dribbble
          </a>
        </Flex>
        <Flex className={"justify-between mt-[106px]"}>
            <Project projectDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."} projectName={"Ahuse"} projectImage={project1}/>
            <Project projectDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."} projectName={"App Dashboard"} projectImage={project2}/>
            <Project projectDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."} projectName={"Easy Rent"} projectImage={project3}/>
        </Flex>
      </Container>
    </section>
  );
};

export default Portfolio;
