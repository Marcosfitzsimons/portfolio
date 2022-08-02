import React from "react";
import Nav from "./Nav";
import me from "../assets/me.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

const Aside = () => {
  return (
    <div className="aside w-72 bg-secondary text-neutral fixed left-0 top-0 h-full z-10 border-r-accent/20 border-r hidden lg:block shadow-lg shadow-white/20">
      <div className="h-full flex justify-center items-center">
        <div className="logo absolute top-12 text-3xl capitalize">
          <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="font-bold py-4 px-5 text-3xl tracking-[5px] relative cursor-pointer"
          >
            <span className="text-accent font-secondary-font text-[40px]">
              M
            </span>
            arcos
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Aside;
