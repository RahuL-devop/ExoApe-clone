import React from "react";
import LandingImg from "../assets/media/landingImg.webp";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      <div className="__Landing relative h-[150vh] w-full text-white md:h-[250vh]">
        <div className=" h-full overflow-hidden">
          <img
            data-scroll
            data-scroll-speed="-1"
            className="h-full w-full object-cover"
            src={LandingImg}
            alt="LandingImg"
          />
          <div className="Landing__txt absolute top-0 h-full max-w-screen-2xl px-5 sm:px-28 ">
            <div className="Landing__para mt-36 md:mt-[60vh]">
              {[
                "Global digital design studio partnering with",
                "brands and businesses that create exceptional",
                "experiences where people live, work, and unwind.",
              ].map((item, index) => {
                return (
                  <motion.p
                    key={index}
                    className="masker w-fit overflow-hidden text-sm md:text-2xl"
                  >
                    <motion.span
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        stiffness: 0,
                        damping: 0,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  </motion.p>
                );
              })}
            </div>
            <div className="Landing__heading mt-2  md:leading-none ">
              {["Digital", "Design", "Experience"].map((item, index) => {
                return (
                  <motion.h1
                    initial={{ opacity: 0, y: 130 }}
                    animate={{ opacity: 1, y: 2 }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      stiffness: 0,
                      damping: 0,
                    }}
                    className=" text-6xl leading-none tracking-tighter md:mb-[-2.4vw]  md:text-[16vw]   md:leading-none"
                  >
                    <span className="inline-block ">{item}</span>
                  </motion.h1>
                );
              })}
            </div>
            <div className="Landing__para2">
              <p className="md:mt-22 mt-20 text-sm md:w-1/3 md:text-2xl">
                We help experience-driven companies thrive by making their
                audience feel the refined intricacies of their brand and product
                in the digital space. Unforgettable journeys start with a click.
              </p>
              <a
                href="#"
                className="mt-10 inline-block border-b-[.3px] border-zinc-100/80 md:mt-14 md:border-b-[1px] md:text-xl"
              >
                The Studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
