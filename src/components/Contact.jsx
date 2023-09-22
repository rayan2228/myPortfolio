import React from "react";
import Container from "./layouts/Container";
import Title from "./Title";
import Flex from "./layouts/Flex";
import Input from "./layouts/Input";
const Contact = () => {
  return (
    <section className="mt-[197px] px-2 container:px-0">
      <Container>
        <Title
          smallTitle={"Get In Touch"}
          title={"Contact me"}
          mainClassName={"text-center"}
          className={"text-5xl my-5"}
        />
        <p className="text-center font-rob sm:text-2xl text-[#1C1E53]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form action="" className="mt-16">
          <Flex
            className={"sm:flex-row flex-col flex-wrap justify-between container:w-[1024px] w-full  m-auto gap-y-8"}
          >
            <Input labelText={"First name"} type={"text"} />
            <Input labelText={"Last name"} type={"text"} />
            <Input labelText={"Email"} type={"email"} />
            <Input labelText={"Phone number"} type={"tel"} />
            <div className="font-rob text-xl text-text-primary w-full">
              <label htmlFor="">Choose a topic</label>
              <select
                name=""
                id=""
                className="p-4 rounded-lg border-2 border-primary outline-primary w-full mt-3"
              >
                <option value="">Select one...</option>
              </select>
            </div>
            <div className="font-rob text-xl text-text-primary w-full">
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                className="p-4 rounded-lg border-2 border-primary outline-primary w-full mt-3 h-[240px] resize-none"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <div className="font-rob text-lg text-text-primary w-full">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-3 border border-text-primary rounded-sm "
              />
              <label htmlFor="">I accept the terms</label>
            </div>
            <div className="text-center  w-full   ">
              <button className="py-[18px] px-[42px] bg-primary rounded-lg text-xl font-rob text-white">Submit</button>
            </div>
          </Flex>
        </form>
      </Container>
    </section>
  );
};
export default Contact;
