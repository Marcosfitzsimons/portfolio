import React from "react";
import { MdWeb } from "react-icons/md";
import { RiGithubFill, RiHtml5Fill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

// add icons of technologies that I used in each project.

const PortfolioItem = ({ projectImage, liveSiteUrl, repositoryUrl }) => {
  const projectActive = () => {
    // fix
    const overlay = document.querySelector(".overlay");
    overlay.classList.toggle("hidden");
    const portfolioLinks = document.querySelector(".portfolio-links-container");
    portfolioLinks.classList.toggle("active");
  };
  const clickProject = () => {
    const projects = document.querySelectorAll(".portfolio-item");
    projects.forEach((project) => {
      project.addEventListener("click", projectActive);
    });
  };
  return (
    <article
      onClick={clickProject}
      className="portfolio-item py-4 mb-6 lg:mb-6 max-w-[290px] m-auto md:m-0 relative"
    >
      <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
        <div className="portfolio-img-container relative">
          <img
            src={projectImage}
            alt="#"
            className="w-full max-h-[200px] z-20 opacity-95 rounded-lg"
          />
          <div className="hidden overlay absolute h-full w-full bg-primary/80 z-90 top-0 left-0 rounded-lg border-none"></div>
        </div>

        <div className="portfolio-links-container bottom-[5rem] left-0 lg:bottom-[3rem] xl:bottom-[4.5rem] absolute z-30 hidden gap-2 justify-center items-center w-full">
          <div className="animate__animated animate__fadeIn portfolio-links-item p-2 bg-accent/20 shadow-md shadow-white/30 rounded-md flex items-center justify-center border border-neutral/70">
            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center flex flex-col gap-2 items-center justify-between text-base-100 w-[5.3rem] h-[4.4rem] lg:w-[4.4rem] lg:h-[4.4rem] pt-2"
            >
              Live site{" "}
              <MdWeb className="text-accent/90 text-3xl border border-white/70 rounded-md pl-[.1rem]" />
            </a>
          </div>
          <div className="animate__animated animate__fadeIn portfolio-links-item p-2 bg-accent/20 shadow-md shadow-white/30 rounded-md flex items-center justify-center border border-neutral/70">
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center flex flex-col items-center leading-4 justify-between text-base-100 w-[5.3rem] h-[4.3rem] lg:w-[4.4rem] lg:h-[4.4rem]"
            >
              Github repository{" "}
              <RiGithubFill className="text-accent/90 text-3xl border border-white/70 rounded-md px-[.1rem]" />
            </a>
          </div>
        </div>
      </div>
      <div className="tools-container flex items-center text-neutral bg-secondary absolute top-0 right-[-1rem] text-xl rounded-full p-[.5rem] z-90 border border-accent/30">
        <RiHtml5Fill />
        <IoLogoCss3 />
        <SiTailwindcss />
        <TbBrandJavascript />
      </div>
    </article>
  );
};

export default PortfolioItem;
