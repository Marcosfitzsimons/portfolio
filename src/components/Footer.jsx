import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer h-[5rem] bg-primary w-full p-[30px] flex justify-center items-center">
      <div className="footer-container w-full lg:w-[80%] xl:w-[65%] flex items-center justify-between">
        <div className="linkedin-container lg:w-[10rem] flex gap-3 items-center text-base">
          <p className="text-base-100 lg:text-lg">Let's Connect:</p>
          <FaLinkedin className="text-2xl hover:text-accent/70 text-accent cursor-pointer text-center hover:translate-y-[-3px] transition-transform" />
        </div>
        <ul className="social-links-list flex items-center gap-3 p-3">
          <li className="social-link pr-2 border-r border-r-accent/20">
            <RiGithubFill className="text-2xl hover:text-accent/70 text-accent cursor-pointer text-center hover:translate-y-[-3px] transition-transform" />
          </li>
          <li className="social-link pr-2 border-r border-r-accent/20">
            <AiOutlineTwitter className="text-2xl hover:text-accent/70 text-accent cursor-pointer text-center hover:translate-y-[-3px] transition-transform" />
          </li>
          <li className="social-link pr-2 border-r border-r-accent/20">
            <SiFrontendmentor className="text-xl hover:text-accent/70 text-accent cursor-pointer text-center hover:translate-y-[-3px] transition-transform" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;