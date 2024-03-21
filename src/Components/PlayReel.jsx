import React, { useEffect, useRef } from "react";
import vidReel from "../assets/media/vidReel.mp4";
import gsap, { Power4, ScrollTrigger } from "gsap/all";

const PlayReel = () => {
  const parent = useRef(null);
  const child = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(
      child.current,
      {
        width: "135%",
        height: "125%",
        ease: Power4,
      },
      "a",
    );

    tl.to(
      play.current,
      {
        x: "75%",
      },
      "a",
    );
    tl.to(
      reel.current,
      {
        x: "-75%",
      },
      "a",
    );
  });

  return (
    <>
      <div
        ref={parent}
        className="__PlayReel relative h-screen w-full overflow-hidden bg-[#0D0E13] text-white"
      >
        <div
          ref={child}
          className="playReel__picture absolute left-1/2 top-1/2 z-[8] aspect-video h-full w-40 -translate-x-1/2 -translate-y-1/2 md:w-96 "
        >
          <video
            preload="none"
            autoPlay
            loop
            muted
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[0.8] "
            src={vidReel}
          ></video>
        </div>
        <div className="playReel__container absolute z-[9] flex h-full w-full flex-col items-center justify-between py-12">
          <div className="playreel__title flex items-center gap-2">
            <div className="svg  text-white">
              <svg
                data-v-669b4a84=""
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon w-3"
              >
                <path
                  data-v-669b4a84=""
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="playreel__text text-xs">work in motion</div>
          </div>
          <div className="Actual__playreelTitle w-full">
            <h2 className="flex justify-around uppercase ">
              <div ref={play} className="md:text-[10vw]">
                play
              </div>
              <div ref={reel} className="md:text-[10vw]">
                Reel
              </div>
            </h2>
          </div>
          <div className="playReel_description w-full">
            <p className="px-8 text-center text-xs">
              Our work is best experienced in motion. Don’t forget to put on
              your headphones.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayReel;
