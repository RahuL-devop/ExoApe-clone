import React from "react";
import Loogo from "../assets/Loogo";
import { RiMenu3Line } from "react-icons/ri";
import { motion, stagger } from "framer-motion";

const Navbar = () => {
  const Nav__links = ["work", "studio", "News", "Contact"];

  return (
    <>
      <div className="fixed z-[999] w-full">
        <div className="Navbar mx-auto flex max-w-screen-2xl items-center justify-between  px-5 py-5 md:px-10 md:py-10">
          <div className="Nav__Logo w-16 origin-top-left overflow-hidden text-white md:w-20">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Loogo />
            </motion.div>
          </div>
          <span className="Nav__mobile text-white md:hidden">
            <RiMenu3Line />
          </span>
          <motion.div className="Nav__Links hidden gap-6 overflow-hidden capitalize text-white md:flex ">
            {Nav__links.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  // whileHover={}
                  className="Nav__items cursor-pointer"
                >
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
