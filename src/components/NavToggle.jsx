import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import "animate.css";

const NavToggle = ({ showAside }) => {
  return (
    <div
      onClick={showAside}
      className="nav-toggle shadow-md shadow-neutral/20 transition-opacity flex flex-col gap-1 items-center justify-center z-20 h-10 w-11 fixed left-7 top-8 rounded-md bg-secondary cursor-pointer lg:hidden"
    >
      <RiMenu2Fill className="text-accent text-2xl" />
    </div>
  );
};

export default NavToggle;
