import React from "react";
import {
  RiHome4Line,
  RiBookmark3Line,
  RiUserHeartLine,
  RiQuestionAnswerLine,
} from "react-icons/ri";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  // useState for the link navegation active.
  return (
    <nav className="">
      <ul className="nav-list list-none mb-4">
        <li className="nav-list__item mb-6 block">
          <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer nav-list__link home-link active flex items-center gap-3 mt-12 text-xl font-semibold py-2 px-4 border-b border-slate-700"
          >
            <RiHome4Line className="text-xl" /> Home
          </Link>
        </li>
        <li className="nav-list__item mb-6 block ">
          <Link
            to="portfolio"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer nav-list__link portfolio-link flex items-center gap-3 text-xl font-semibold py-2 px-4 border-b border-slate-700"
          >
            <RiBookmark3Line className="text-xl" /> Projects
          </Link>
        </li>
        <li className="nav-list__item mb-6 block ">
          <Link
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer nav-list__link flex items-center gap-3 text-xl font-semibold py-2 px-4 border-b border-slate-700"
          >
            <RiUserHeartLine className="text-xl" /> About
          </Link>
        </li>
        <li className="nav-list__item mb-6 block ">
          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer nav-list__link flex items-center gap-3 text-xl font-semibold py-2 px-4 border-b border-slate-700"
          >
            <RiQuestionAnswerLine className="text-xl" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
