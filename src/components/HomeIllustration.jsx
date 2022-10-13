import React from "react";
import { motion } from "framer-motion";

const homeIllustrationVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
    },
  },
};

const HomeIllustration = () => {
  return (
    <motion.div
      className="home__illustration w-3/6 max-w-[40%] basis-[40%] grow-0 shrink-0 text-center relative px-4 hidden 2xl:block right-10"
      variants={homeIllustrationVariants}
      initial="hidden"
      animate="visible"
    ></motion.div>
  );
};

export default HomeIllustration;
