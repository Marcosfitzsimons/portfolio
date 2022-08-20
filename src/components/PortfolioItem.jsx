import React from "react";
import { motion } from "framer-motion";

const PortfolioItem = ({
  projectImage,
  liveSiteUrl,
  repositoryUrl,
  projectTitle,
  htmlIcon,
  reactIcon,
  jsIcon,
  cssIcon,
  tailwindIcon,
}) => {
  return (
    <motion.article
      className="portfolio-item py-4 mt-[1rem] mb-[5rem] max-w-[280px] relative z-[100]"
      whileHover={{ scale: 1.05 }}
    >
      <div className="portfolio-title-container absolute bg-accent/5 left-[2.2rem] w-[12.5rem] text-center top-[-1.7rem] px-2 t p-1 py-2 rounded-md transition-colors select-none">
        <h5 className="portfolio-title text-sm">{projectTitle}</h5>
      </div>
      <div className="portfolio-item-inner border-[4px] border-accent/60 rounded-xl overflow-hidden hover:border-accent/90">
        <div className="portfolio-img-container">
          <img
            src={projectImage}
            alt="#"
            className="w-full z-20 max-h-[200px] rounded-lg"
          />
        </div>

        <div className="portfolio-links-container flex bottom-[-2.5rem] left-0 absolute z-[9] gap-2 justify-center items-center w-full">
          <div className="btn btn-accent transition-colors cursor-pointer portfolio-links-item p-2 rounded-md flex items-center justify-center border-transparent bg-accent/60">
            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-center text-neutral w-[5.9rem] h-[2rem]"
            >
              Live server
            </a>
          </div>
          <div className="btn btn-accent transition-colors cursor-pointer portfolio-links-item p-2 rounded-md flex items-center justify-center border-transparent bg-accent/60">
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
      <div className="z-[-2] tools-container hidden transition-transform items-center text-neutral bg-secondary/90 shadow-sm shadow-neutral/40 absolute top-6 right-[-.2rem] text-xl rounded-full p-[.5rem] border border-accent/60 hover:border-accent/50">
        <span>{htmlIcon}</span>
        <span>{cssIcon}</span>
        <span>{tailwindIcon}</span>
        <span>{jsIcon}</span>
        <span>{reactIcon}</span>
      </div>
    </motion.article>
  );
};

export default PortfolioItem;
