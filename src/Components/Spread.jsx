import React from "react";

const Spread = () => {
  return (
    <div className="__Spread relative h-screen w-full py-10 ">
      <div className="Spread__container mx-auto h-2/3 max-w-screen-2xl px-5 md:px-10">
        <div className="Spread__featured flex items-center justify-center  gap-1 ">
          <div className="starIcon w-2">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              data-v-669b4a84=""
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
                data-v-669b4a84=""
              ></path>
            </svg>
          </div>
          <div className="_title">
            <p>In the media</p>
          </div>
        </div>
        <div className="spread__heading mt-10 w-full flex-col items-center justify-center text-center md:flex">
          <h1 className="text-6xl  leading-none tracking-tighter md:w-[50%]  md:text-[10.5vw]">
            Spread the News
          </h1>
          <p className="mt-5 px-4 text-sm md:w-[40%] md:text-2xl ">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            className="md:text-md mt-10 inline-block text-xs underline"
            href="#"
          >
            Browse all works
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spread;
