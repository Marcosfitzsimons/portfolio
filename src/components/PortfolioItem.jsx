import React from "react";
import { RiHtml5Fill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

// add icons of technologies that I used in each project.

const PortfolioItem = ({
  projectImage,
  liveSiteUrl,
  repositoryUrl,
  projectTitle,
}) => {
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
      className="portfolio-item py-4 mb-[4rem] max-w-[310px] md:w-[280px] m-auto relative"
    >
      <div className="portfolio-title-container hover:text-accent/60 absolute left-3 top-[-1.2rem] bg-accent/5 p-1 py-2 rounded-md rounded-b-none hover:border-accent/50 transition-colors select-none">
        <h5 className="portfolio-title text-sm">{projectTitle}</h5>
      </div>
      <div className="portfolio-item-inner border-[4px] border-accent/60 rounded-xl overflow-hidden">
        <div className="portfolio-img-container">
          <img
            src={projectImage}
            alt="#"
            className="w-full z-20 max-h-[200px]  opacity-80 rounded-lg"
          />
        </div>

        <div className="portfolio-links-container flex bottom-[-2.1rem] left-0 absolute z-[9] gap-2 justify-center items-center w-full">
          <div className="transition-colors cursor-pointer hover:border hover:border-accent/50 hover:border-t-transparent portfolio-links-item p-2 bg-accent/10 shadow-md shadow-neutral/20 rounded-md flex items-center justify-center border border-t-transparent border-accent/80 rounded-t-none">
            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-center text-neutral w-[5.9rem] h-[2rem]"
            >
              Live server
            </a>
          </div>
          <div className="transition-colors cursor-pointer hover:border hover:border-accent/50 hover:border-t-transparent portfolio-links-item p-2 bg-accent/10 shadow-md shadow-neutral/20 rounded-md flex items-center justify-center border border-t-transparent border-accent/80 rounded-t-none">
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-center leading-4 text-neutral w-[5.9rem] h-[2rem]"
            >
              Github repository
            </a>
          </div>
        </div>
      </div>
      <div className="tools-container transition-colors flex items-center text-neutral bg-secondary/90 shadow-sm shadow-neutral/40 absolute top-0 right-[-2.3rem] text-xl rounded-full p-[.5rem] z-90 border border-accent/60 hover:border-accent/50">
        <RiHtml5Fill />
        <IoLogoCss3 />
        <SiTailwindcss />
        <TbBrandJavascript />
      </div>
    </article>
  );
};

export default PortfolioItem;
