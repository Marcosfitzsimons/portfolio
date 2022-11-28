import React from "react";
import Typed from "typed.js";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const homeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
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
          <div className="home__info max-w-full basis-full grow-0 shrink-0 px-4 text-center lg:basis-[90%] lg:text-start">
            <h1 className="home__title flex flex-col items-center gap-2 text-3xl my-5 mx-0 font-bold md:text-4xl lg:flex-row ">
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
            <p className="home__description mb-[70px] text-base text-slate-200 max-w-[85%] mx-auto lg:mx-0 lg:max-w-[65%] lg:text-xl 2xl:max-w-[55%]">
              I'm self-taught developer who enjoys creating beautiful, friendly
              and functional user interfaces.
            </p>
            <div className="flex justify-center gap-3 lg:gap-5 lg:justify-start">
              <Link
                to="about"
                smooth={true}
                offset={-20}
                duration={800}
                className="btn shadow-md shadow-neutral/10 overflow-hidden bg-transparent border-accent/70 rounded-md hire-me w-[9rem] text-neutral z-20 relative hover:bg-transparent hover:border-accent hover:shadow-accent/30 transition-colors"
              >
                <span>About me</span>
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                offset={0}
                duration={800}
                className="btn shadow-md shadow-neutral/10 overflow-hidden bg-transparent border-accent/70 rounded-md hire-me w-[9rem] text-neutral z-20 relative transition-colors hover:bg-transparent hover:border-accent hover:shadow-accent/30"
              >
                <span>My Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
