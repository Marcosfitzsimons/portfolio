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
      className="portfolio-item py-4 mb-6 lg:mb-8 max-w-[290px] m-auto relative"
    >
      <div className="portfolio-item-inner border-[4px] border-accent/60 rounded-xl overflow-hidden shadow-xl shadow-white/10">
        <div className="portfolio-img-container">
          <img
            src={projectImage}
            alt="#"
            className="w-full max-h-[200px] z-20 opacity-70 rounded-lg"
          />
        </div>

        <div className="portfolio-links-container flex bottom-[-1.5rem] left-0 absolute z-[9] gap-2 justify-center items-center w-full">
          <div className="hover:bg-accent/30 hover:border hover:border-neutral animate__animated animate__fadeIn portfolio-links-item p-2 bg-accent/10 shadow-md shadow-white/30 rounded-md flex items-center justify-center border border-accent">
            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className=" select-none font-medium text-center flex flex-col gap-2 items-center justify-between text-neutral w-[5.3rem] h-[4.4rem] lg:w-[4.4rem] lg:h-[4.4rem] pt-2"
            >
              Live site <MdWeb className="text-neutral text-3xl" />
            </a>
          </div>
          <div className="hover:bg-accent/30 hover:border hover:border-neutral animate__animated animate__fadeIn portfolio-links-item p-2 bg-accent/10 shadow-md shadow-white/30 rounded-md flex items-center justify-center border border-accent/70">
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className=" select-none font-medium text-center flex flex-col items-center leading-4 justify-between text-neutral w-[5.3rem] h-[4.3rem] lg:w-[4.4rem] lg:h-[4.4rem]"
            >
              Github repository{" "}
              <RiGithubFill className="text-neutral text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="transition-colors tools-container flex items-center text-neutral bg-secondary absolute top-0 right-[-1rem] text-xl rounded-full p-[.5rem] z-90 border border-accent/60 hover:border-accent/40">
        <RiHtml5Fill />
        <IoLogoCss3 />
        <SiTailwindcss />
        <TbBrandJavascript />
      </div>
    </article>
  );
};

export default PortfolioItem;
