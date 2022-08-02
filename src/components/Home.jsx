import React from "react";
import HomeIllustration from "./HomeIllustration";

const Home = () => {
  return (
    <section className="home section text-neutral min-h-screen flex">
      <div className="container">
        <div className="row flex flex-wrap -mx-4 relative">
          <div className="home__info max-w-full lg:max-w-[60%] basis-full lg:basis-[60%] grow-0 shrink-0 px-4">
            <h1 className="home__title text-3xl lg:text-4xl my-5 mx-0 font-bold">
              Hello, my name is{" "}
              <span className="font-secondary-font font-bold text-accent">
                Marcos Fitzsimons
              </span>
            </h1>
            <h2 className="font-bold home__profession text-3xl lg:text-4xl my-4 mx-0">
              I'm a{" "}
              <span className="typing text-accent">Front-End Developer </span>
            </h2>
            <p className="home__description mb-[70px] text-lg lg:text-xl text-base-100">
              I'm a front-end developer who enjoys creating beautiful and
              functional user experiences. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Similique,
              iste.
            </p>
            <a href="#contact" className="btn btn-accent hire-me w-[9rem]">
              Hire Me
            </a>
          </div>
          <HomeIllustration />
        </div>
      </div>
    </section>
  );
};

export default Home;
