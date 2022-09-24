import React from "react";
import projectBookmarkImg from "../assets/project-bookmark.webp";
import projectCalculatorImg from "../assets/project-calculator.webp";
import projectAdviceImg from "../assets/project-advice.webp";
import projectDashboardImg from "../assets/project-dashboard.webp";
import projectCrowfundingImg from "../assets/project-crowdfunding.webp";
import projectIllustrationImg from "../assets/project-illustration.webp";
import projectTodoImg from "../assets/project-todo-app.webp";
import projectEasybankImg from "../assets/project-easybank.webp";
import PortfolioItem from "./PortfolioItem";
import { RiGithubFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectsData = [
    {
      id: 1,
      image: projectTodoImg,
      liveSiteUrl: "https://todo-react-app-pi.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/todo-react-app",
      title: "Todo React App",
      htmlIcon: <TiHtml5 />,
      cssIcon: <IoLogoCss3 />,
      jsIcon: <TbBrandJavascript />,
      reactIcon: <DiReact />,
    },
    {
      id: 2,
      image: projectBookmarkImg,
      liveSiteUrl: "https://bookmark-react-app.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/bookmark-react-app",
      title: "Bookmark React App",
      htmlIcon: <TiHtml5 />,
      cssIcon: <IoLogoCss3 />,
      jsIcon: <TbBrandJavascript />,
      reactIcon: <DiReact />,
    },
    {
      id: 3,
      image: projectCalculatorImg,
      liveSiteUrl: "https://calculator-app-w-react.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/calculator-app-w-react",
      title: "Calculator React App",
      htmlIcon: <TiHtml5 />,
      cssIcon: <IoLogoCss3 />,
      jsIcon: <TbBrandJavascript />,
      reactIcon: <DiReact />,
    },
    {
      id: 4,
      image: projectAdviceImg,
      liveSiteUrl: "https://advice-generator-app-eight.vercel.app/",
      repositoryUrl: "https://github.com/Marcosfitzsimons/advice-generator-app",
      title: "Advice Generator App",
      htmlIcon: <TiHtml5 />,
      cssIcon: <IoLogoCss3 />,
      jsIcon: <TbBrandJavascript />,
      reactIcon: <DiReact />,
    },
    {
      id: 5,
      image: projectDashboardImg,
      liveSiteUrl:
        "https://social-media-dashboard-w-theme-switcher.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/social-media-dashboard-w-theme-switcher",
      title: "Social Media Dashboard",
      htmlIcon: <TiHtml5 />,
      cssIcon: <IoLogoCss3 />,
      jsIcon: <TbBrandJavascript />,
      reactIcon: <DiReact />,
    },
    {
      id: 6,
      image: projectCrowfundingImg,
      liveSiteUrl: "https://crowdfunding-product-page-ivory.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/crowdfunding-product-page",
      title: "Crowdfund Product Page",
      htmlIcon: <TiHtml5 />,
      cssIcon: <IoLogoCss3 />,
      jsIcon: <TbBrandJavascript />,
      reactIcon: <DiReact />,
    },
    {
      id: 7,
      image: projectIllustrationImg,
      liveSiteUrl: "https://chat-app-illustration-five.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/chat-app-css-illustration-w-tailwind",
      title: "Chat App Css Illustration",
      htmlIcon: <TiHtml5 />,
      cssIcon: <IoLogoCss3 />,
      jsIcon: <TbBrandJavascript />,
      reactIcon: <DiReact />,
    },
    {
      id: 8,
      image: projectEasybankImg,
      liveSiteUrl: "https://easybank-landing-page-alpha-seven.vercel.app/",
      repositoryUrl:
        "https://github.com/Marcosfitzsimons/easybank-landing-page",
      title: "Easybank Landing Page",
      htmlIcon: <TiHtml5 />,
      cssIcon: <IoLogoCss3 />,
      jsIcon: <TbBrandJavascript />,
      reactIcon: <DiReact />,
    },
  ];

  return (
    <section
      className="portfolio section text-neutral min-h-screen"
      name="portfolio"
    >
      <div
        className="container pb-10"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s",
        }}
      >
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
          {projectsData.map((project) => {
            return <PortfolioItem key={project.id} project={project} />;
          })}
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
