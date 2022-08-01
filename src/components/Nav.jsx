import React from "react";
import {
  RiHome4Line,
  RiBookmark3Line,
  RiUserHeartLine,
  RiQuestionAnswerLine,
} from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="">
      <ul className="nav-list list-none mb-4">
        <li className="nav-list__item mb-6 block">
          <a
            href="#"
            className="nav-list__link active flex items-center gap-3 mt-12 text-xl font-semibold py-2 px-4 border-b border-slate-700"
          >
            <RiHome4Line className="text-xl" /> Home
          </a>
        </li>
        <li className="nav-list__item mb-6 block ">
          <a
            href="#"
            className="nav-list__link flex items-center gap-3 text-xl font-semibold py-2 px-4 border-b border-slate-700"
          >
            <RiBookmark3Line className="text-xl" /> Projects
          </a>
        </li>
        <li className="nav-list__item mb-6 block ">
          <a
            href="#"
            className="nav-list__link flex items-center gap-3 text-xl font-semibold py-2 px-4 border-b border-slate-700"
          >
            <RiUserHeartLine className="text-xl" /> About
          </a>
        </li>
        <li className="nav-list__item mb-6 block ">
          <a
            href="#"
            className="nav-list__link flex items-center gap-3 text-xl font-semibold py-2 px-4 border-b border-slate-700"
          >
            <RiQuestionAnswerLine className="text-xl" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
