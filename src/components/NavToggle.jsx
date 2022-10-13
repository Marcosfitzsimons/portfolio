import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BsChevronDoubleLeft } from "react-icons/bs";
import "animate.css";

const NavToggle = ({ setIsMenu, isMenu }) => {
  const handleOnClick = () => {
    setIsMenu((prevValue) => !prevValue);
  };
  return (
    <div
      onClick={handleOnClick}
      className={`${
        !isMenu
          ? "left-[17.9rem] top-[0] rounded-l-none shadow-sm"
          : "left-7 top-8 shadow-md"
      } transition-all shadow-neutral/10 flex flex-col gap-1 items-center justify-center z-20 h-10 w-11 fixed rounded-md bg-secondary cursor-pointer lg:hidden`}
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
