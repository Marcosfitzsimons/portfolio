import React from "react";

const NavToggle = () => {
  return (
    <div className="transition-opacity flex flex-col gap-1 items-center justify-center nav-toggle h-10 w-11 border border-text-100 fixed left-7 top-10 rounded-md bg-secondary cursor-pointer z-50 lg:hidden opacity-70 hover:opacity-100">
      <span className="h-[2px] w-5 bg-accent inline-block"></span>
      <span className="h-[2px] w-5 bg-accent inline-block"></span>
      <span className="h-[2px] w-5 bg-accent inline-block"></span>
    </div>
  );
};

export default NavToggle;
