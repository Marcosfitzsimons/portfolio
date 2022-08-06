import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer h-[5rem] bg-primary w-full p-[30px] flex justify-center items-center">
      <ul className="social-links-list flex items-center gap-3 p-3 shadow-md shadow-neutral/10 bg-secondary/40 rounded-md">
        <li className="social-link">
          <FaLinkedin className="text-2xl hover:text-accent/70 text-accent cursor-pointer text-center" />
        </li>
        <li className="social-link">
          <RiGithubFill className="text-2xl hover:text-accent/70 text-accent cursor-pointer text-center" />
        </li>
        <li className="social-link">
          <SiFrontendmentor className="text-xl hover:text-accent/70 text-accent cursor-pointer text-center" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
