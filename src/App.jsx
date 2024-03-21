import React from "react";
import LocomotiveScroll from "locomotive-scroll";

import {
  Navbar,
  Landing,
  Work,
  PlayReel,
  ImageGallery,
  Spread,
  Footer,
} from "./Components";


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="Main w-full ">
        <Navbar />
        <Landing />
        <Work />
        <PlayReel />
        <ImageGallery />
        <Spread />
        <Footer />
      </div>
    </>
  );
};

export default App;
