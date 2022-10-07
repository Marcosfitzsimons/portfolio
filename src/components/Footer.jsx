import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer h-[5rem] bg-primary w-full lg:pt-8 flex justify-center items-center">
      <div className="footer-container w-full lg:w-[80%] xl:w-[65%] flex items-center justify-between">
        <div className="linkedin-container lg:w-[10rem] flex gap-3 items-center text-base">
          <p className="text-base-100 lg:text-lg">Let's Connect:</p>
          <a
            href="https://www.linkedin.com/in/marcos-fitzsimons-70a010208/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-accent/70 text-accent cursor-pointer text-center hover:translate-y-[-3px] transition-transform" />
          </a>
        </div>
        <ul className="social-links-list flex items-center gap-3 p-3">
          <li className="social-link pr-2 border-r border-r-accent/20">
            <a
              href="https://github.com/Marcosfitzsimons"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubFill className="text-2xl hover:text-accent/70 text-accent cursor-pointer text-center hover:translate-y-[-3px] transition-transform" />
            </a>
          </li>

          <li className="social-link pr-2 border-r border-r-accent/20">
            <a
              href="https://twitter.com/Marcossf98"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter className="text-2xl hover:text-accent/70 text-accent cursor-pointer text-center hover:translate-y-[-3px] transition-transform" />
            </a>
          </li>
          <li className="social-link pr-2 border-r border-r-accent/20">
            <a
              href="https://www.frontendmentor.io/profile/Marcosfitzsimons"
              target="_blank"
              rel="noreferrer"
            >
              <SiFrontendmentor className="text-xl hover:text-accent/70 text-accent cursor-pointer text-center hover:translate-y-[-3px] transition-transform" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
