import React from "react";
import Nav from "./Nav";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const Aside = ({ isMenu, setIsMenu }) => {
  return (
    <motion.div
      layout
      className={`${
        !isMenu ? "translate-x-[0]" : "translate-x-[-290px]"
      } aside z-30 bg-secondary transition-all w-72 text-neutral lg:translate-x-[0] fixed left-0 top-0 h-full border-r-zinc-700 border-r lg:block`}
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
            duration={800}
            onClick={() => setIsMenu((prevValue) => !prevValue)}
            className="logo-link font-bold py-4 px-5 text-3xl tracking-[5px] relative cursor-pointer"
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
