import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const PortfolioItem = ({ project }) => {
  const [isShown, setIsShown] = useState(false);

  const projectDetails = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const handleIsShown = () => {
    setIsShown(!isShown);
  };

  return (
    <motion.article className="portfolio-item py-4 mt-[1rem] mb-[5rem] max-w-[280px] relative origin-center hover:origin-bottom hover:-translate-y-1 transition-all duration-200 align-middle">
      <div className="portfolio-title-container absolute bg-accent/5 left-[2.2rem] w-[12.5rem] text-center top-[-1.7rem] px-2 t p-1 py-2 rounded-md transition-colors select-none">
        <h5 className="portfolio-title text-sm">{project.title}</h5>
      </div>
      <div className="portfolio-item-inner">
        <div className="portfolio-img-container overflow-hidden relative border-[1px] p-1 border-accent/70 rounded-xl hover:border-accent">
          <img
            src={project.image}
            alt="-"
            className="w-full z-90 max-h-[200px] rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center gap-1 px-2 mt-1 justify-center">
          {isShown ? (
            <BsChevronDoubleUp
              className="text-xl cursor-pointer text-neutral/90 hover:text-neutral"
              onClick={handleIsShown}
            />
          ) : (
            <BsChevronDoubleDown
              className="text-xl cursor-pointer text-neutral/90 hover:text-neutral"
              onClick={handleIsShown}
            />
          )}
          {isShown && (
            <motion.div
              className="self-start"
              variants={projectDetails}
              initial="hidden"
              animate="show"
            >
              <h4 className="text-sm">Languages & Tools I Used:</h4>
              <ul>
                {project.tools.map((tool) => {
                  return <li key={tool.id}>{tool.icon}</li>;
                })}
              </ul>
            </motion.div>
          )}
        </div>
        <div className="portfolio-links-container flex bottom-[-2.5rem] left-0 absolute z-[9] gap-2 justify-center items-center w-full">
          <div className="btn transition-colors cursor-pointer shadow-md shadow-neutral/10 overflow-hidden bg-transparent border-accent/70 hover:border-accent rounded-md hire-me text-neutral hover:bg-transparent hover:border-accent/80">
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-center text-neutral w-[5.9rem] h-[2rem]"
            >
              Live server
            </a>
          </div>
          <div className="btn transition-colors cursor-pointer shadow-md shadow-neutral/10 overflow-hidden bg-transparent border-accent/70 hover:border-accent rounded-md hire-me text-neutral hover:bg-transparent hover:border-accent/80">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-center leading-4 text-neutral w-[5.9rem] h-[2rem]"
            >
              Github repository
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PortfolioItem;
