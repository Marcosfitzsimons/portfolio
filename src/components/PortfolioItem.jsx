import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const PortfolioItem = ({ project }) => {
  const [isShown, setIsShown] = useState(false);

  const modalButton = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.article
      className="portfolio-item py-4 mt-[1rem] mb-[5rem] max-w-[280px] relative origin-center hover:origin-bottom  hover:scale-105 transition-all duration-200 align-middle"
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}
    >
      <div className="portfolio-title-container absolute bg-accent/5 left-[2.2rem] w-[12.5rem] text-center top-[-1.7rem] px-2 t p-1 py-2 rounded-md transition-colors select-none">
        <h5 className="portfolio-title text-sm">{project.title}</h5>
      </div>
      <div className="portfolio-item-inner border-[1px] p-1 border-accent/60 rounded-xl overflow-hidden hover:border-accent/90">
        <div className="overflow-hidden portfolio-img-container relative">
          {isShown && (
            <motion.label
              variants={modalButton}
              initial="hidden"
              animate="show"
              htmlFor="my-modal-3"
              className="modal-button absolute top-[4.6rem]
            left-[4.2rem] p-2 border hover:border-accent/60 cursor-pointer bg-primary/50
            uppercase z-[100] border-accent/90"
            >
              about project
            </motion.label>
          )}
          <img
            src={project.image}
            alt="-"
            className="w-full z-90 max-h-[200px] rounded-lg"
          />
          {isShown && (
            <motion.div
              variants={modalButton}
              initial="hidden"
              animate="show"
              className="card-hover-bg absolute left-0 top-0 w-full h-full bg-black/30 z-50 rounded-md"
            ></motion.div>
          )}
        </div>

        <div className="portfolio-links-container flex bottom-[-2.5rem] left-0 absolute z-[9] gap-2 justify-center items-center w-full">
          <div className="btn btn-accent transition-colors cursor-pointer portfolio-links-item p-2 rounded-md flex items-center justify-center border-transparent bg-accent/60">
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="select-none font-medium text-center text-sm flex items-center justify-center text-neutral w-[5.9rem] h-[2rem]"
            >
              Live server
            </a>
          </div>
          <div className="btn btn-accent transition-colors cursor-pointer portfolio-links-item p-2 rounded-md flex items-center justify-center border-transparent bg-accent/60">
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
