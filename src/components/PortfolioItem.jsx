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
      className="portfolio-item py-4 mb-[4rem] max-w-[310px] m-auto relative"
    >
      <div className="portfolio-item-inner border-[4px] border-accent/60 rounded-xl overflow-hidden">
        <div className="portfolio-img-container">
          <img
            src={projectImage}
            alt="#"
            className="w-full max-h-[200px] z-20 opacity-80 rounded-lg"
          />
        </div>

        <div className="portfolio-links-container flex bottom-[-2.2rem] left-0 absolute z-[9] gap-2 justify-center items-center w-full">
          <div className="transition-colors cursor-pointer hover:border hover:border-accent/70 hover:border-t-transparent portfolio-links-item p-2 bg-accent/20 shadow-md shadow-white/30 rounded-md flex items-center justify-center border border-accent border-t-transparent rounded-t-none">
            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-center gap-1 text-neutral w-[5.9rem] h-[2rem]"
            >
              Live site <MdWeb className="text-neutral text-xl" />
            </a>
          </div>
          <div className="transition-colors cursor-pointer hover:border hover:border-accent/70 hover:border-t-transparent portfolio-links-item p-2 bg-accent/20 shadow-md shadow-white/30 rounded-md flex items-center justify-center border border-accent border-t-transparent rounded-t-none">
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-around leading-4 text-neutral w-[5.9rem] h-[2rem]"
            >
              Github repository{" "}
              <RiGithubFill className="text-neutral text-4xl" />
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
