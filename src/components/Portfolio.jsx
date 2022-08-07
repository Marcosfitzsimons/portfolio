import React from "react";
import { RiGithubFill } from "react-icons/ri";
import PortfolioItem from "./PortfolioItem";
import projectIllustration from "../assets/project-illustration.webp";
import projectBookmark from "../assets/project-bookmark.webp";
import projectCrowdfound from "../assets/project-crowdfunding.webp";
import projectAdvice from "../assets/project-advice.webp";
import projectDashboard from "../assets/project-dashboard.webp";
import projectEasybank from "../assets/project-easybank.webp";
import projectCalculator from "../assets/project-calculator.webp";
import projectUrlShortening from "../assets/project-url-shortening.webp";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";

const Portfolio = () => {
  return (
    <section
      className="portfolio section text-neutral min-h-screen"
      name="portfolio"
    >
      <div className="container pb-10">
        <div className="row">
          <div className="portfolio__title basis-full grow-0 shrink-0 py-4 max-w-full mb-[60px]">
            <h3 className="text-4xl pb-2 font-bold relative before:content[''] before:h-[4px] before:w-[50px] before:bg-accent before:absolute before:top-[100%] before:left-0 after:content[''] after:h-[4px] after:w-[25px] after:bg-accent after:absolute after:top-[100%] after:left-0 after:mt-[8px]">
              Projects
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading basis-full grow-0 shrink-0 max-w-full py-4">
            <h4 className="text-xl pb-5">My Last Projects:</h4>
          </div>
        </div>
        <div className="flex flex-col items-center row sm:grid sm:gap-6 sm:grid-cols-2 sm:w-full xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-3">
          <PortfolioItem
            projectImage={projectBookmark}
            liveSiteUrl="https://bookmark-react-app.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/bookmark-react-app"
            projectTitle="Bookmark React App"
            htmlIcon={<TiHtml5 />}
            tailwindIcon={<SiTailwindcss />}
            jsIcon={<TbBrandJavascript />}
            reactIcon={<DiReact />}
          />
          <PortfolioItem
            projectImage={projectCalculator}
            liveSiteUrl="https://calculator-app-w-react.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/calculator-app-w-react"
            projectTitle="Calculator React App"
            htmlIcon={<TiHtml5 />}
            cssIcon={<IoLogoCss3 />}
            jsIcon={<TbBrandJavascript />}
            reactIcon={<DiReact />}
          />
          <PortfolioItem
            projectImage={projectAdvice}
            liveSiteUrl="https://advice-generator-app-eight.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/advice-generator-app"
            projectTitle="Advice Generator App"
            htmlIcon={<TiHtml5 />}
            cssIcon={<IoLogoCss3 />}
            jsIcon={<TbBrandJavascript />}
          />
          <PortfolioItem
            projectImage={projectDashboard}
            liveSiteUrl="https://social-media-dashboard-w-theme-switcher.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/social-media-dashboard-w-theme-switcher"
            projectTitle="Social Media Dashboard"
            htmlIcon={<TiHtml5 />}
            cssIcon={<IoLogoCss3 />}
            jsIcon={<TbBrandJavascript />}
          />
          <PortfolioItem
            projectImage={projectCrowdfound}
            liveSiteUrl="https://crowdfunding-product-page-ivory.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/crowdfunding-product-page"
            projectTitle="Crowdfund Product Page"
            htmlIcon={<TiHtml5 />}
            cssIcon={<IoLogoCss3 />}
            jsIcon={<TbBrandJavascript />}
          />
          <PortfolioItem
            projectImage={projectIllustration}
            liveSiteUrl="https://chat-app-illustration-five.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/chat-app-css-illustration-w-tailwind"
            projectTitle="Chat App Css Illustartion"
            htmlIcon={<TiHtml5 />}
            tailwindIcon={<SiTailwindcss />}
            jsIcon={<TbBrandJavascript />}
          />
          <PortfolioItem
            projectImage={projectUrlShortening}
            liveSiteUrl="https://url-shortening-w-api.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/url-shortening-w-api"
            projectTitle="Shortly Url Shortening API"
            htmlIcon={<TiHtml5 />}
            cssIcon={<IoLogoCss3 />}
            jsIcon={<TbBrandJavascript />}
          />
          <PortfolioItem
            projectImage={projectEasybank}
            liveSiteUrl="https://easybank-landing-page-alpha-seven.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/easybank-landing-page"
            projectTitle="Easybank Landing Page"
            htmlIcon={<TiHtml5 />}
            cssIcon={<IoLogoCss3 />}
            jsIcon={<TbBrandJavascript />}
          />
        </div>
        <div className="row text-center py-4">
          <p className="text-lg pb-5 text-base-100 flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:gap-2">
            If you like, you can see more of my personal projects in my github
            account:
            <a
              href="https://github.com/Marcosfitzsimons"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <RiGithubFill className="text-3xl hover:text-accent/70 text-accent cursor-pointer text-center" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
