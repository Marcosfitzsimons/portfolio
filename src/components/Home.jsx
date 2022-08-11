import React from "react";
import HomeIllustration from "./HomeIllustration";
import Typed from "typed.js";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const homeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
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
            <h1 className="home__title text-3xl lg:text-4xl my-5 mx-0 font-bold">
              Hello, my name is{" "}
              <span className="font-secondary-font font-bold text-accent">
                Marcos Fitzsimons
              </span>
            </h1>
            <h2 className="font-bold home__profession text-[1.3rem] lg:text-4xl my-5 mx-0">
              I'm a{" "}
              <span
                className="typing text-accent"
                style={{ whiteSpace: "pre" }}
                ref={el}
              />
            </h2>
            <p className="home__description mb-[70px] text-lg lg:text-xl 2xl:w-[80%] text-base-100">
              I'm a front-end developer who enjoys creating beautiful, friendly
              and functional user experiences.
            </p>
            <Link
              to="about"
              smooth={true}
              offset={-20}
              duration={500}
              className="btn btn-accent hire-me w-[9rem]"
            >
              About Me
            </Link>
          </div>
          <HomeIllustration />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
