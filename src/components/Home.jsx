import React from "react";
import HomeIllustration from "./HomeIllustration";
import Typed from "typed.js";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const homeVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 12,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Home = () => {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Front-End Developer", "Web Developer"],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <motion.section
      className="pt-4 home section text-neutral min-h-screen flex"
      title="home"
      variants={homeVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="row flex flex-wrap -mx-4 relative">
          <div className="home__info max-w-full lg:max-w-[60%] basis-full lg:basis-[60%] grow-0 shrink-0 px-4">
            <h1
              className="home__title text-3xl lg:text-4xl my-5 mx-0 font-bold"
              variants={childVariants}
            >
              Hello, my name is{" "}
              <span className="font-secondary-font font-bold text-accent">
                Marcos Fitzsimons
              </span>
            </h1>
            <motion.h2
              className="font-bold home__profession text-[1.3rem] lg:text-4xl my-5 mx-0"
              variants={childVariants}
            >
              I'm a{" "}
              <span
                className="typing text-accent"
                style={{ whiteSpace: "pre" }}
                ref={el}
              />
            </motion.h2>
            <motion.p
              className="home__description mb-[70px] text-lg lg:text-xl 2xl:w-[80%] text-base-100"
              variants={childVariants}
            >
              I'm a self-taught developer who enjoys creating beautiful,
              friendly and functional user interfaces.
            </motion.p>
            <motion.div className="" variants={childVariants}>
              <Link
                to="about"
                smooth={true}
                offset={-20}
                duration={500}
                className="btn-home btn shadow-md shadow-neutral/10 overflow-hidden bg-transparent border-accent/80 rounded-md hire-me w-[9rem] text-neutral z-20 relative hover:bg-transparent hover:border-accent/80"
              >
                <span>About me</span>
              </Link>
            </motion.div>
          </div>
          <HomeIllustration childVariants={childVariants} />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
