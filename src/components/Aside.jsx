import React from "react";
import Nav from "./Nav";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const Aside = ({ isMenu, setIsMenu }) => {
  return (
    <motion.div
      layout
      className={`${
        !isMenu ? "translate-x-[0]" : "translate-x-[-280px]"
      } transition-all w-72 bg-secondary text-neutral lg:translate-x-[0] fixed left-0 top-0 h-full z-30 border-r-accent/20 border-r lg:block shadow-lg shadow-white/20`}
    >
      <div className="h-full flex justify-center items-center">
        <motion.div
          className="logo absolute top-12 text-3xl capitalize"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
        >
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
        </motion.div>
        <Nav setIsMenu={setIsMenu} />
      </div>
    </motion.div>
  );
};

export default Aside;
