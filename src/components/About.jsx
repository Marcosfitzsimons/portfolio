import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Linkedin - Let's connect, my chat is open if you wanna talk. ?
// Cv - Learn a bit more about me and my experience. ?

const About = () => {
  return (
    <section
      className="about bg-primary section text-neutral min-h-screen"
      name="about"
    >
      <div className="container pt-[60px] pb-[70px]">
        <div className="row">
          <div className="basis-full grow-0 shrink-0 py-4 max-w-full mb-[60px]">
            <h3 className="text-4xl pb-2 font-bold relative before:content[''] before:h-[4px] before:w-[50px] before:bg-accent before:absolute before:top-[100%] before:left-0 after:content[''] after:h-[4px] after:w-[25px] after:bg-accent after:absolute after:top-[100%] after:left-0 after:mt-[8px]">
              About Me
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="about-content basis-full grow-0 shrink-0 max-w-full py-4">
            <div className="row pb-4">
              <div className="about-text basis-full grow-0 shrink-0 max-w-full py-4">
                <h4 className="text-2xl font-bold lg:text-3xl my-5">
                  I'm Marcos Fitzsimons,{" "}
                  <span className="text-accent">Front-End Developer</span>
                </h4>
                <p className="text-base leading-6 text-base-100 xl:w-[85%] lg:text-lg 2xl:w-[80%] my-5">
                  I'm a self-taught student, currently focusing on studying the
                  basics of Javascript & Front-end Development.
                </p>
                <p className="text-base leading-6 text-base-100 xl:w-[85%] lg:text-lg 2xl:w-[80%] my-5">
                  At the beginning of 2021, due to a change of interests, I
                  decided to leave my career as a nutritionist and start my way
                  to become a front-end developer.
                </p>
              </div>
            </div>
            <div className="row py-4">
              <h4 className="about-skills-title my-4 text-xl text-accent">
                Languages & Tools I Use:
              </h4>
              <div className="about-skills-container my-4 flex flex-col items-start gap-5">
                <ul className="about-skills-list flex gap-2 flex-wrap rounded-md p-4 pl-0 w-[90%]">
                  <li className="about-skills-item btn no-animation text-neutral font-medium border border-accent/70 hover:border-accent/40 bg-accent/10 hover:bg-accent/10 btn-sm">
                    Javascript
                  </li>
                  <li className="about-skills-item btn no-animation text-neutral font-medium border border-accent/70 hover:border-accent/40 bg-accent/10 hover:bg-accent/10 btn-sm">
                    React
                  </li>
                  <li className="about-skills-item btn no-animation text-neutral font-medium border border-accent/70 hover:border-accent/40 bg-accent/10 hover:bg-accent/10 btn-sm">
                    CSS
                  </li>
                  <li className="about-skills-item btn no-animation text-neutral font-medium border border-accent/70 hover:border-accent/40 bg-accent/10 hover:bg-accent/10 btn-sm">
                    HTML
                  </li>
                  <li className="about-skills-item btn no-animation text-neutral font-medium border border-accent/70 hover:border-accent/40 bg-accent/10 hover:bg-accent/10 btn-sm">
                    GitHub
                  </li>
                  <li className="about-skills-item btn no-animation text-neutral font-medium border border-accent/70 hover:border-accent/40 bg-accent/10 hover:bg-accent/10 btn-sm">
                    TailwindCSS
                  </li>
                </ul>
                <div className="about-buttons-container flex flex-col w-full sm:w-auto sm:flex-row gap-5 my-5">
                  <div className="indicator w-full sm:w-36 opacity-90">
                    <span className="indicator-item badge hidden sm:flex sm:left-2 select-none bg-transparent text-neutral z-10">
                      unavailable
                    </span>
                    <button className="btn btn-accent w-full sm:w-36 cursor-default bg-transparent z-0 hover:bg-transparent">
                      Download CV
                    </button>
                  </div>
                  <Link
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="btn btn-accent w-full sm:w-36"
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
