import React from "react";
import { useState } from "react";
import {
  RiHome4Line,
  RiBookmark3Line,
  RiUserHeartLine,
  RiQuestionAnswerLine,
} from "react-icons/ri";
import { Link, animateScroll as scroll } from "react-scroll";

import NavLink from "./NavLink";

const Nav = () => {
  const [active, setActive] = useState(null);

  const handleClose = () => {
    const aside = document.querySelector(".aside");
    const navToggle = document.querySelector(".nav-toggle");
    aside.classList.toggle("hidden");
    navToggle.classList.toggle("active");
  };

  const navLinkData = [
    {
      id: 1,
      text: "Home",
      to: "home",
      offset: -70,
      icon: <RiHome4Line className="text-xl" />,
    },
    {
      id: 2,
      text: "Projects",
      to: "portfolio",
      offset: 0,
      icon: <RiBookmark3Line className="text-xl" />,
    },
    {
      id: 3,
      text: "About",
      to: "about",
      offset: -20,
      icon: <RiUserHeartLine className="text-xl" />,
    },
    {
      id: 4,
      text: "Contact",
      to: "contact",
      offset: -70,
      icon: <RiQuestionAnswerLine className="text-xl" />,
    },
  ];

  return (
    <nav className="">
      <ul className="nav-list list-none mb-4">
        {navLinkData.map((navLink) => {
          return (
            <NavLink
              key={navLink.id}
              navLink={navLink}
              handleClose={handleClose}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
