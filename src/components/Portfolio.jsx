import React from "react";
import { RiGithubFill } from "react-icons/ri";

const Portfolio = () => {
  const projectActive = () => {
    const overlay = document.querySelector(".overlay");
    overlay.classList.toggle("hidden");
    const portfolioLinks = document.querySelector(".portfolio-links-container");
    portfolioLinks.classList.toggle("active");
  };

  return (
    <section
      className="portfolio section text-neutral min-h-screen"
      name="portfolio"
    >
      <div className="container pb-10">
        <div className="row">
          <div className="basis-full grow-0 shrink-0 py-4 max-w-full mb-[60px]">
            <h3 className="text-4xl pb-2 font-bold relative before:content[''] before:h-[4px] before:w-[50px] before:bg-accent before:absolute before:top-[100%] before:left-0 after:content[''] after:h-[4px] after:w-[25px] after:bg-accent after:absolute after:top-[100%] after:left-0 after:mt-[8px]">
              Projects
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading basis-full grow-0 shrink-0 max-w-full py-4">
            <h4 className="text-xl pb-5">My Last Projects:</h4>
          </div>
        </div>
        <div className="row sm:grid sm:grid-cols-2 lg:gap-2 lg:grid-cols-3 xl:grid-cols-4 w-[full] lg:w-[85%]">
          <article
            onClick={projectActive}
            className="portfolio-item py-4 mb-6 lg:mb-6 max-w-[280px] m-auto md:m-0 relative"
          >
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container relative">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px] z-20"
                />
                <div className="hidden overlay absolute h-full w-full bg-primary/60 z-90 top-0 left-0 rounded-md border-none"></div>
              </div>

              <div className="portfolio-links-container bottom-[8.2rem] left-0 lg:bottom-[6rem] absolute hidden gap-2 justify-center items-center w-full">
                <button className="btn">Live site</button>
                <a href="#" className="btn">
                  GitHub
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
        </div>
        <div className="row text-center py-4">
          <p className="text-lg pb-5 text-base-100 flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:gap-2">
            If you like, you can see more of my personal projects in my github
            account:
            <a
              href="https://github.com/Marcosfitzsimons"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <RiGithubFill className="text-3xl hover:text-accent/70 text-accent cursor-pointer text-center" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
