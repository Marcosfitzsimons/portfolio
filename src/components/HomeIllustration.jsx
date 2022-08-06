import React from "react";
import HomeIllustrationDefault from "../assets/home-illustration-default.png";
import HomeIllustrationRed from "../assets/home-illustration-red.png";
import HomeIllustrationPink from "../assets/home-illustration-pink.png";
import HomeIllustrationBlue from "../assets/home-illustration-blue.png";

// add change color illustration functionality.

const HomeIllustration = () => {
  return (
    <div className="home__illustration w-3/6 max-w-[40%] basis-[40%] grow-0 shrink-0 text-center relative px-4 hidden lg:block">
      <img
        src={HomeIllustrationDefault}
        alt="#"
        className="home-illustration h-[380px] m-auto"
      />
    </div>
  );
};

export default HomeIllustration;
