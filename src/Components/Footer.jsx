import React from "react";
import foot_vid from "../assets/media/foot_vid.mp4";

const Footer = () => {
  return (
    <div className="__Footer relative z-[3] h-fit w-full bg-[#060606] px-5 py-10 text-white md:px-10">
      <div className="footer__container flex items-center">
        <div className="footer__title z-[1] w-[40%]">
          <h1 className="text-6xl text-[#E0CCBB] md:text-[10vw]">Our</h1>
          <h1 className="text-6xl  text-[#E0CCBB] md:text-[10vw]">Story</h1>
        </div>
        <div className=" w-[60%]">
          <video
            autoPlay
            loop
            muted
            className="object-cover-cover h-full w-full scale-[1]"
            src={foot_vid}
          ></video>
        </div>
      </div>
      <div className="Spread__desc mt-10">
        <p className="text-lg text-[#B0A195]">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
        <a href="#" className="mt-5 inline-block  text-[#B0A195] underline">
          Our Story
        </a>
      </div>

      <hr className="mt-5 bg-[#B0A195]" />

      <div className="footer_items flex items-center gap-20 py-6  text-sm text-[#E0CCBB]">
        <div className="items__left flex flex-col gap-2">
          {["work", "studio", "news", "contact"].map((item, index) => {
            return <a href="#">{item}</a>;
          })}
        </div>
        <div className="items__riht flex flex-col  gap-2">
          {["Behance", "Dribble", "Twitter", "Instagram"].map((item, index) => {
            return <a href="#">{item}</a>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
