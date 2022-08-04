import React from "react";
import { RiGithubFill } from "react-icons/ri";
import PortfolioItem from "./PortfolioItem";
import projectIllustration from "../assets/project-illustration.png";
import projectBookmark from "../assets/project-bookmark.png";
import projectCrowdfound from "../assets/project-crowdfund.png";

const Portfolio = () => {
  return (
    <section
      className="portfolio section text-neutral min-h-screen"
      name="portfolio"
    >
      <div className="container pb-10">
        <div className="row">
          <div className="basis-full grow-0 shrink-0 py-4 max-w-full mb-[60px]">
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
        <div className="row sm:grid sm:grid-cols-2 lg:gap-5 lg:grid-cols-3 xl:grid-cols-4 w-full lg:w-[90%]">
          <PortfolioItem
            projectImage={projectIllustration}
            liveSiteUrl="https://chat-app-illustration-five.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/chat-app-css-illustration-w-tailwind"
          />
          <PortfolioItem
            projectImage={projectBookmark}
            liveSiteUrl="https://bookmark-react-app.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/bookmark-react-app"
          />
          <PortfolioItem
            projectImage={projectCrowdfound}
            liveSiteUrl="https://crowdfunding-product-page-ivory.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/crowdfunding-product-page"
          />
          <PortfolioItem
            projectImage={projectIllustration}
            liveSiteUrl="https://chat-app-illustration-five.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/chat-app-css-illustration-w-tailwind"
          />
          <PortfolioItem
            projectImage={projectIllustration}
            liveSiteUrl="https://chat-app-illustration-five.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/chat-app-css-illustration-w-tailwind"
          />
          <PortfolioItem
            projectImage={projectIllustration}
            liveSiteUrl="https://chat-app-illustration-five.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/chat-app-css-illustration-w-tailwind"
          />
          <PortfolioItem
            projectImage={projectIllustration}
            liveSiteUrl="https://chat-app-illustration-five.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/chat-app-css-illustration-w-tailwind"
          />
          <PortfolioItem
            projectImage={projectIllustration}
            liveSiteUrl="https://chat-app-illustration-five.vercel.app/"
            repositoryUrl="https://github.com/Marcosfitzsimons/chat-app-css-illustration-w-tailwind"
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
