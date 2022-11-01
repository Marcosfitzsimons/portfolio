import React from "react";
import projectBookmarkImg from "../assets/project-bookmark.webp";
import projectCalculatorImg from "../assets/project-calculator.webp";
import projectEcommerce from "../assets/project-ecommerce.webp";
import projectSpaceTourismImg from "../assets/project-space-tourism.webp";
import projectCrowfundingImg from "../assets/project-crowdfunding.webp";
import projectAdvice from "../assets/project-advice.webp";
import projectTodoImg from "../assets/project-todo-app.webp";
import projectJobListings from "../assets/project-job-listings.webp";
import PortfolioItem from "./PortfolioItem";
import { RiGithubFill } from "react-icons/ri";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectsData = [
    {
      id: 1,
      image: projectEcommerce,
      liveSiteUrl: "https://ecommerce-product-page-coral-nine.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/ecommerce-product-page",
      title: "Ecommerce Product Page",
      stack: ["React, ", "TailwindCSS"],
      description:
        "Ecommerce product page that allows the user to add items to and remove them from the cart, as well as change the large product image by clicking on small thumbnail images.",
    },
    {
      id: 2,
      image: projectJobListings,
      liveSiteUrl: "https://job-listings-w-filtering.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/job-listings-w-filtering",
      title: "Job Listings w. Filtering",
      stack: ["React, ", "TailwindCSS"],
      description:
        "Filter job listings based on the categories (Role, Level, Languages, Tools). To add a filter, the user needs to click on the tablets.",
    },
    {
      id: 3,
      image: projectSpaceTourismImg,
      liveSiteUrl: "https://space-tourism-website-lyart.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/space-tourism-website",
      title: "Space Tourism Website",
      stack: ["React, ", "TailwindCSS, ", "Framer Motion"],
      description:
        "Space tourism multi-page website, good to practice my css skills, react-router-dom v6.3, animations between pages and also accessibility.",
    },
    {
      id: 4,
      image: projectTodoImg,
      liveSiteUrl: "https://todo-react-app-pi.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/todo-react-app",
      title: "Todo React App",
      stack: ["React, ", "TailwindCSS"],
      description:
        "Todo App that allows users to add new todos to the list, mark todos as complete, delete todos from the list, filter by all/active/complete...",
    },
    {
      id: 5,
      image: projectCalculatorImg,
      liveSiteUrl: "https://calculator-app-w-react.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/calculator-app-w-react",
      title: "Calculator React App",
      stack: ["React, ", "CSS"],
      description:
        "A calculator made with react that allows to do basic mathematical operations.",
    },
    {
      id: 6,
      image: projectCrowfundingImg,
      liveSiteUrl: "https://crowdfunding-product-page-ivory.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/crowdfunding-product-page",
      title: "Crowdfund Product Page",
      stack: ["HTML, ", "CSS, ", "Javascript"],
      description:
        "Crowdfunding product page, project in which I could practice my skills with css and some javascript.",
    },
    {
      id: 7,
      image: projectAdvice,
      liveSiteUrl: "https://advice-generator-app-eight.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/advice-generator-app",
      title: "Advice Generator App",
      stack: ["HTML, ", "CSS, ", "Javascript"],
      description:
        "A simple advice generator app that allows users to generate a new piece of advice by clicking the dice icon",
    },
    {
      id: 8,
      image: projectBookmarkImg,
      liveSiteUrl: "https://bookmark-react-app.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/bookmark-react-app",
      title: "Bookmark React App",
      stack: ["React, ", "TailwindCSS, ", "DaisyUI"],
      description:
        "Bookmark app, project in which I was able to practice my layout skills. I was also able to learn how to use some DaisyUI components.",
    },
  ];

  return (
    <section
      className="portfolio section text-neutral min-h-screen"
      name="portfolio"
    >
      <div
        className="container pb-10 relative"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s",
        }}
      >
        <div className="row">
          <div className="portfolio__title basis-full grow-0 shrink-0 max-w-full mb-[60px]">
            <h3 className="text-4xl pb-2 font-bold relative before:content[''] before:h-[4px] before:w-[50px] before:bg-accent before:absolute before:top-[100%] before:left-0 after:content[''] after:h-[4px] after:w-[25px] after:bg-accent after:absolute after:top-[100%] after:left-0 after:mt-[8px]">
              Projects
            </h3>
          </div>
        </div>
        <div className="row xl:hidden">
          <div className="portfolio-heading basis-full grow-0 shrink-0 max-w-full py-4">
            <h4 className="text-xl pb-5">My Last Projects:</h4>
          </div>
        </div>
        <div className="flex flex-col items-center row sm:grid sm:gap-6 sm:grid-cols-2 sm:w-full xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-0 relative">
          {projectsData.map((project) => {
            return <PortfolioItem key={project.id} project={project} />;
          })}
        </div>
        <div className="row text-center py-4 xl:flex">
          <p className="text-base pb-5 text-base-100 flex flex-col items-center gap-2 lg:flex-row lg:gap-2 xl:bg-accent/10 xl:border xl:border-accent/40 xl:px-2 xl:py-2 xl:rounded-md">
            You can see more of my personal projects in my github account:
            <a
              href="https://github.com/Marcosfitzsimons"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <RiGithubFill className="text-3xl hover:scale-105 transition-all duration-200 text-accent cursor-pointer text-center" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
