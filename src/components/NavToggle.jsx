import React from "react";
import { TbMenu2 } from "react-icons/tb";
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
        !isMenu ? "left-[17.9rem] top-[0] rounded-l-none" : "left-7 top-8"
      } transition-all text-slate-300 bg-secondary flex flex-col items-center justify-center z-20 h-10 w-11 fixed rounded-lg cursor-pointer hover:bg-slate-300/10 hover:text-white lg:hidden`}
    >
      {isMenu ? (
        <TbMenu2 className="text-2xl" />
      ) : (
        <BsChevronDoubleLeft className="text-2xl" />
      )}
    </div>
  );
};

export default NavToggle;
