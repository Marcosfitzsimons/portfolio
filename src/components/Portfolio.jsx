import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { motion } from "framer-motion";
import PortfolioItem from "./PortfolioItem";
import {
  projectRestCountries,
  projectMultiStepForm,
  projectEcommerce,
  projectSpaceTourismImg,
  projectAdviency,
  projectAdvice,
  projectTodoImg,
  projectHoobank,
} from "./index";

const sectionVariants = {
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

const Portfolio = () => {
  const projectsData = [
    {
      id: 1,
      image: projectMultiStepForm,
      liveSiteUrl: "https://multi-step-form-tawny.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons",
      title: "Multi Step Form",
      stack: ["Next, ", "React, ", "TypeScript, ", "TailwindCSS"],
      description:
        "A Multi Step Form with a great design, allowed me to use RadixUI components and understand how to manage and validate user data between each form step.",
    },
    {
      id: 2,
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
      id: 3,
      image: projectAdviency,
      liveSiteUrl: "https://adviency-app-puce.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/adviency-app",
      title: "Adviency App",
      stack: ["Next, ", "React, ", "TailwindCSS, ", "Framer Motion"],
      description:
        "The purpose of this app is to practice, learn by repetition and gain a habit by creating the same app from scratch with a new functionality every day for 24 days in a row.",
    },
    {
      id: 4,
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
      id: 5,
      image: projectRestCountries,
      liveSiteUrl: "https://rest-countries-app-five.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/rest-countries-app",
      title: "Rest Countries App",
      stack: ["React, ", "Next, ", "TailwindCSS"],
      description:
        "Project in which I have been able to practice how to interact with an external API with the new Next.js 13 fetch data methods. View all countries, search for a country, filter countries by region are some of the functions that meet this challenge.",
    },
    {
      id: 6,
      image: projectHoobank,
      liveSiteUrl: "https://hoobank-page.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/hoobank-page",
      title: "Hoobank App",
      stack: ["Next, ", "React, ", "TailwindCSS, ", "Framer Motion"],
      description:
        "Project in which I was able to gain more familiarity with Next, practice my layout skills and nicely animate each section with Framer Motion.",
    },
    {
      id: 7,
      image: projectAdvice,
      liveSiteUrl: "https://advice-generator-app-eight.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/advice-generator-app",
      title: "Advice Generator App",
      stack: ["HTML, ", "CSS, ", "Javascript"],
      description:
        "A simple advice generator app that allows users to generate a new piece of advice by clicking the dice icon.",
    },
    {
      id: 8,
      image: projectTodoImg,
      liveSiteUrl: "https://todo-react-app-pi.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/todo-react-app",
      title: "Todo React App",
      stack: ["React, ", "TailwindCSS"],
      description:
        "Todo App that allows users to add new todos to the list, mark todos as complete, delete todos from the list, filter by all/active/complete...",
    },
  ];

  return (
    <section
      className="portfolio section text-neutral min-h-screen"
      name="portfolio"
    >
      <motion.div
        className="container pb-10 relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
          <p className="text-slate-200 transition-colors pb-5 flex flex-col items-center gap-2 lg:flex-row lg:gap-2 xl:bg-accent/10 xl:border xl:border-accent/40 xl:px-2 xl:py-2 xl:rounded-md hover:border-accent">
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
      </motion.div>
    </section>
  );
};

export default Portfolio;
