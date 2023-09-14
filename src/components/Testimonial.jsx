import React from "react";
import Container from "./layouts/Container";
import Title from "./Title";
import Reviews from "./Reviews";
import Flex from "./layouts/Flex";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
const Testimonial = () => {
  return (
    <section className="mt-40 bg-[#F5FCFF] py-[150px]">
      <Container>
        <Title
          smallTitle={"Clients Feedback"}
          title={"Customer testimonials"}
        />
        <Flex className={"justify-between mt-[106px]"}>
          <Reviews
            img={avatar1}
            review={
              "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
            }
            name={"Dianne Russell"}
            companyName={"Starbucks"}
          />
          <Reviews
            img={avatar2}
            review={
              "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
            }
            name={"Dianne Russell"}
            companyName={"Starbucks"}
          />
          <Reviews
            img={avatar3}
            review={
              "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
            }
            name={"Dianne Russell"}
            companyName={"Starbucks"}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Testimonial;
