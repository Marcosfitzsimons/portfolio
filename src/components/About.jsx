import React from "react";

const About = () => {
  return (
    <section className="about bg-primary section text-neutral min-h-screen">
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
                <h4 className="text-2xl mb-4 font-bold">
                  I'm Marcos Fitzsimons,{" "}
                  <span className="text-accent">Frontend Developer</span>
                </h4>
                <p className=" text-base leading-6 text-base-100">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  modi impedit nostrum aliquam. Deserunt maxime culpa, magni
                  ullam voluptatem aspernatur amet inventore commodi dignissimos
                  nam quaerat sint suscipit placeat porro! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Doloremque, amet!
                </p>
              </div>
            </div>
            <div className="row py-4">
              <h4 className="about-skills-title py-4 text-xl text-accent">
                Languages & Tools I Use:
              </h4>
              <div className="about-skills-container flex flex-col items-start gap-8">
                <ul className="about-skills-list flex gap-4 justify-evenly flex-wrap rounded-md p-4">
                  <li className="about-skills-item btn no-animation btn-sm hover:bg-accent/50 hover:text-neutral border-none">
                    Javascript
                  </li>
                  <li className="about-skills-item btn no-animation btn-sm hover:bg-accent/50 hover:text-neutral border-none">
                    React
                  </li>
                  <li className="about-skills-item btn no-animation btn-sm hover:bg-accent/50 hover:text-neutral border-none">
                    CSS
                  </li>
                  <li className="about-skills-item btn no-animation btn-sm hover:bg-accent/50 hover:text-neutral border-none">
                    HTML
                  </li>
                  <li className="about-skills-item btn no-animation btn-sm hover:bg-accent/50 hover:text-neutral border-none">
                    GitHub
                  </li>
                  <li className="about-skills-item btn no-animation btn-sm hover:bg-accent/50 hover:text-neutral border-none">
                    TailwindCSS
                  </li>
                </ul>
                <div className="about-buttons-container flex flex-col w-full sm:w-auto sm:flex-row gap-5">
                  <button className="btn btn-accent w-full sm:w-36">
                    Download CV
                  </button>
                  <button className="btn btn-accent w-full sm:w-36">
                    Hire Me
                  </button>
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
