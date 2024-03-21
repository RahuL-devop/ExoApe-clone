import React, { useState } from "react";
import vid1 from "../assets/media/vid-1.mp4";
import vid2 from "../assets/media/vid-2.mp4";
import vid3 from "../assets/media/vid-3.mp4";
import vid4 from "../assets/media/vid-4.mp4";
import img1 from "../assets/media/img1.webp";
import img2 from "../assets/media/img2.webp";
import img3 from "../assets/media/img3.webp";
import img4 from "../assets/media/img4.webp";
import { motion } from "framer-motion";

const Work = () => {
  const [works, setWorks] = useState([
    {
      heading: "Studio D",
      description: "Urban and Landscape Design",
      img: img1,
      video: vid1,
    },
    {
      heading: "Rino & Pelle",
      description: "Efforless Chic lifestyle",
      img: img2,
      video: vid2,
    },
    {
      heading: "Abele Interiors",
      description: "Luxurious Design Experience",
      img: img3,
      video: vid3,
    },
    {
      heading: "Pixleflakes",
      description: "Architectural marketing agency",
      img: img4,
      video: vid4,
    },
  ]);
  return (
    <div className="__Work relative min-h-screen w-full px-5 py-10 md:pt-32 ">
      <div className="mx-auto max-w-screen-2xl">
        <div className="work__projets">
          <div className="work__featured_Mobile flex items-center gap-1 md:hidden">
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
            <div className="work__featured_Mobile_title ">
              <p>Fetured Projects</p>
            </div>
          </div>
          <div className="work__text ">
            <div className="work_title_mobile">
              <h1 className="mt-6 overflow-hidden text-[18vw] leading-none tracking-tighter">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  viewport={{ once: true }}
                  className=" inline-block origin-top-left "
                >
                  Work{" "}
                </motion.span>
              </h1>
            </div>
            <div className="Work__display__largeDevices  hidden md:block">
              <div className="project_top__main justify-aroun flex flex-row-reverse">
                <div className="work__featured_top_right hidden md:flex md:w-[40%]  ">
                  <div className=" top_right_group">
                    <div className="work_title_large flex items-center gap-2">
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
                      <div className="featured__title ">
                        <p>Fetured Projects</p>
                      </div>
                    </div>
                    <p className="work__project__description_large text-md mt-5 leading-tight text-[#0d0e13cb] md:w-[70%] md:text-[1.8vw]">
                      Highlights of cases that we passionately built with
                      forward-thinking clients and friends over the years.
                    </p>
                    <div className="work__media_project1">
                      <div className="work__media-1 relative h-[108vw] overflow-hidden  md:mt-[25vw] md:h-[40vw]">
                        <motion.img
                          initial={{ opacity: 1 }}
                          whileHover={{ opacity: 0 }}
                          data-scroll
                          data-scroll-speed="-.1"
                          className="hidden object-cover md:absolute md:left-0 md:top-0 md:z-[2] md:block"
                          src={img2}
                          alt=""
                        />
                        <video
                          data-scroll
                          data-scroll-speed="-.2"
                          className="absolute z-[1] block  object-cover md:left-0 md:top-0 md:z-[1]"
                          src={vid2}
                          autoPlay
                          loop
                          muted
                        ></video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work__featured_top_left w-[70%] ">
                  <div className="work__media_project2 relative left-[20%]">
                    <div className="work__media-2 b-red-500 relative h-[108vw] overflow-hidden md:h-[40vw] md:w-[60%]">
                      <motion.img
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0 }}
                        data-scroll
                        data-scroll-speed="-.2"
                        className="hidden object-cover md:absolute md:left-0 md:top-0 md:z-[2] md:block"
                        src={img1}
                        alt=""
                      />
                      <video
                        data-scroll
                        data-scroll-speed="-.2"
                        className="absolute z-[1] block w-full object-cover md:left-0 md:top-0 md:z-[1]"
                        src={vid1}
                        autoPlay
                        loop
                        muted
                      ></video>
                    </div>
                    <div className="work__projets__des mt-4 block md:hidden">
                      <p className="">heading</p>
                      <p className="text-black/80">description</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_bottom_main mt-[6vw] flex">
                <div className="work__featured_project3 mt-[25vw] w-[30%]">
                  <div className="work__media_project3">
                    <div className="work__media-3 relative mx-10 h-[108vw] overflow-hidden md:h-[40vw] md:w-[100%]">
                      <motion.img
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0 }}
                        data-scroll
                        data-scroll-speed="-.2"
                        className="hidden object-cover md:absolute md:left-0 md:top-0 md:z-[2] md:block"
                        src={img3}
                        absolute
                      />

                      <video
                        data-scroll
                        data-scroll-speed="-.2"
                        className=" absolute z-[1] block  w-full object-cover md:left-0 md:top-0 md:z-[1]"
                        src={vid3}
                        autoPlay
                        loop
                        muted
                      ></video>
                    </div>
                    <div className="work__projets__des mt-4 block md:hidden">
                      <p className="">heading</p>
                      <p className="text-black/80">description</p>
                    </div>
                  </div>
                </div>
                <div className="work__featured_project4 w-[70%]">
                  <div className="work__media_project4 relative left-[25%] overflow-hidden">
                    <div className="work__media-4 relative h-[108vw] overflow-hidden md:h-[40vw] md:w-[40%]">
                      <motion.img
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0 }}
                        data-scroll
                        data-scroll-speed="-.2"
                        className="hidden overflow-hidden object-cover md:absolute md:left-0 md:top-0 md:z-[2] md:block"
                        src={img4}
                        alt=""
                      />
                      <video
                        data-scroll
                        data-scroll-speed="-.2"
                        className="absolute z-[1] block w-full object-cover md:left-0 md:top-0 "
                        src={vid4}
                        autoPlay
                        loop
                        muted
                      ></video>
                    </div>
                    <div className="work__projets__des mt-4 block md:hidden">
                      <p className="">heading</p>
                      <p className="text-black/80">description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work__featured__projects_mobileDevices md:hidden ">
          {works.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "linear", delay: 0.3 }}
                key={index}
                className="work__works mt-10"
              >
                <div className="work__media h-[108vw] overflow-hidden md:h-[40vw]">
                  <img
                    className="hidden h-full w-full bg-cover md:block "
                    src={item.img}
                    alt=""
                  />
                  <video
                    className="block md:hidden md:hover:block"
                    src={item.video}
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
                <div className="work__projets__des mt-4">
                  <p className="">{item.heading}</p>
                  <p className="text-black/80">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
