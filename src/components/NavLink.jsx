import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavLink = ({ navLink, setActive, active, setIsMenu }) => {
  const handleOnClick = () => {
    setIsMenu((prevValue) => !prevValue);
    setActive(navLink.text);
  };
  return (
    <li className="nav-list__item mb-6 block">
      <Link
        onClick={handleOnClick}
        to={navLink.to}
        smooth={true}
        offset={navLink.offset}
        duration={500}
        className={`${
          active === navLink.text && `active`
        } cursor-pointer nav-list__link home-link flex items-center gap-3 mt-12 text-xl font-semibold py-2 px-4 border-b border-accent/20`}
      >
        {navLink.icon} {navLink.text}
      </Link>
    </li>
  );
};

export default NavLink;
