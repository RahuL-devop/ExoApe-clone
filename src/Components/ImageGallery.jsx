import React, { useEffect, useRef } from "react";
import img_gal_main from "../assets/media/img_gal_main.webp";
import img_gal_vid1 from "../assets/media/img_gal_vid1.mp4";
import img_gal_2 from "../assets/media/img_gal_2.webp";
import img_gal_3 from "../assets/media/img_gal_3.webp";
import gsap, { Linear, ScrollTrigger } from "gsap/all";

const ImageGallery = () => {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        scrub: 1,
        top: "0 90%",
      },
    });
    tl.to(
      first.current,
      {
        x: "10%",
      },
      "a",
    );
    tl.to(
      second.current,
      {
        x: "20%",
      },
      "a",
    );
    tl.to(
      third.current,
      {
        x: "-15%",
      },
      "a",
    );
  });
  return (
    <div
      ref={parent}
      className="__ImageGallery flex h-[60vh] w-full items-center justify-center py-12 md:h-[100vh]"
    >
      <div className="main_image relative z-[2] h-[90%] w-[30%] md:w-[20%]">
        <div
          ref={first}
          className="absolute left-[-40%] top-[40%] h-[30%] w-[80%]"
        >
          <video
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
            src={img_gal_vid1}
          ></video>
        </div>
        <div
          ref={second}
          className="absolute right-[-40%] top-[15%] h-[40%] w-[40%]"
        >
          <img src={img_gal_2} className="h-full w-full object-cover" alt="" />
        </div>
        <div
          ref={third}
          className="absolute left-[-70%] top-[100%] h-[30%] w-[90%] md:h-[20%]"
        >
          <img src={img_gal_3} className="h-full w-full object-cover" alt="" />
        </div>
        <img className="h-full w-full object-cover" src={img_gal_main} alt="" />
      </div>
    </div>
  );
};

export default ImageGallery;
