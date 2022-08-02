import React from "react";
import Nav from "./Nav";
import me from "../assets/me.jpg";

const Aside = () => {
  return (
    <div className="aside w-72 bg-secondary text-neutral fixed left-0 top-0 z-20 h-full border-r-text-base border-r hidden lg:block">
      <div className="h-full flex justify-center items-center">
        <div className="logo absolute top-12 text-3xl capitalize">
          <a
            href="#"
            className="font-bold py-4 px-5 text-3xl tracking-[5px] relative"
          >
            <span className="text-accent font-secondary-font text-[40px]">
              M
            </span>
            arcos
          </a>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Aside;
