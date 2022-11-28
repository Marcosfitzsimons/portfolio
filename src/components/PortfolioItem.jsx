import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const PortfolioItem = ({ project }) => {
  const [isShown, setIsShown] = useState(false);

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const detailsVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeInOut" },
    },
  };

  const handleIsShown = () => {
    setIsShown(!isShown);
  };

  return (
    <motion.article
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="portfolio-item py-4 mt-[1rem] mb-[5rem] max-w-[280px] relative origin-center align-middle hover:origin-bottom hover:-translate-y-1"
    >
      <div className="portfolio-title-container absolute bg-accent/5 left-[2.2rem] w-[12.5rem] text-center top-[-1.7rem] px-2 t p-1 py-2 rounded-md select-none">
        <h5 className="portfolio-title text-sm">{project.title}</h5>
      </div>
      <div className="portfolio-item-inner">
        <div className="portfolio-img-container relative overflow-hidden p-1 border-[1px] border-transparent rounded-xl hover:border-[1px] hover:border-accent transition ease-in-out duration-300">
          <img
            src={project.image}
            alt={project.title}
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
              variants={detailsVariants}
              initial="hidden"
              animate="show"
            >
              <p className="text-sm">
                <span className="text-xs uppercase rounded-sm text-accent font-bold pt-[.1rem] px-1 pr-2">
                  Description:
                </span>
                {project.description}
              </p>
              <div className="flex gap-1">
                <p className="text-xs uppercase rounded-sm text-accent font-bold pt-[.1rem] px-1">
                  Stack:
                </p>
                <ul className="flex gap-1 flex-wrap">
                  {project.stack.map((tool, index) => {
                    return (
                      <li className="text-sm" key={index}>
                        {tool}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
        <div className="portfolio-links-container flex bottom-[-2.5rem] left-0 absolute z-[9] gap-2 justify-center items-center w-full">
          <div className="btn transition-colors cursor-pointer shadow-md shadow-neutral/10 overflow-hidden bg-transparent border-accent/70 rounded-md text-neutral hover:bg-transparent hover:border-accent hover:shadow-accent/30">
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-center text-neutral w-[5.9rem] h-[2rem]"
              aria-label={`See the live server of ${project.title}`}
            >
              Live server
            </a>
          </div>
          <div className="btn transition-colors cursor-pointer shadow-md shadow-neutral/10 overflow-hidden bg-transparent border-accent/70 rounded-md text-neutral hover:bg-transparent hover:border-accent hover:shadow-accent/30">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-center leading-4 text-neutral w-[5.9rem] h-[2rem]"
              aria-label={`See the GitHub repository of ${project.title}`}
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
