import React from "react";
import Container from "./layouts/Container";
import Title from "./Title";
import Flex from "./layouts/Flex";
import Skills from "./Skills";
import productChain from "../assets/product-chain.png";
import web from "../assets/web.png";
import tag from "../assets/tag.png";
import featherPen from "../assets/feather-pen.png";
const Expertise = () => {
  return (
    <section className="mt-[148px]">
      <Container>
        <Title smallTitle={"My Skills"} title={"My Expertise"} className={"text-5xl mt-5"}/>
        <Flex className={"container:gap-x-[42px] mt-[106px] sm:flex-row flex-col items-center sm:items-start container:gap-y-0 gap-y-[42px] sm:justify-around container:justify-start flex-wrap"}>
          <Skills
            src={productChain}
            title={"Strategy & Direction"}
            details={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          />
          <Skills
            src={tag}
            title={"Strategy & Direction"}
            details={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          />
          <Skills
            src={featherPen}
            title={"Strategy & Direction"}
            details={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          />
          <Skills
            src={web}
            title={"Strategy & Direction"}
            details={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Expertise;
