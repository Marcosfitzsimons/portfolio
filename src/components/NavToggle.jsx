import React from "react";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BsChevronDoubleLeft } from "react-icons/bs";
import "animate.css";

const NavToggle = ({ showAside }) => {
  const [isMenu, setIsMenu] = useState(true);

  const handleOnClick = () => {
    showAside();
    setIsMenu((prevValue) => !prevValue);
  };
  return (
    <div
      onClick={handleOnClick}
      className="nav-toggle transition-all shadow-md shadow-neutral/20 flex flex-col gap-1 items-center justify-center z-20 h-10 w-11 fixed left-7 top-8 rounded-md bg-secondary cursor-pointer lg:hidden"
    >
      {isMenu ? (
        <RiMenu2Fill className="text-accent text-2xl" />
      ) : (
        <BsChevronDoubleLeft className="text-accent text-2xl" />
      )}
    </div>
  );
};

export default NavToggle;
