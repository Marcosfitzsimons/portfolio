import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { FaPalette } from "react-icons/fa";

const ThemeChange = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const showThemeSwitcher = () => {
    const themeSwitcher = document.querySelector(".theme-switcher");
    themeSwitcher.classList.toggle("active");
  };

  return (
    <div
      onClick={showThemeSwitcher}
      className="theme-switcher w-[10rem] fixed right-[-9.5rem] top-10 rounded-lg shadow-md shadow-neutral/30 cursor-pointer transition-all"
    >
      <div className="open-theme-switcher shadow-md shadow-neutral/30 w-10 h-10 rounded-md rounded-tr-none rounded-br-none left-[-2.5rem] top-0 z-40 bg-red absolute flex justify-center items-center">
        <FaPalette className="text-neutral/80" />
      </div>
      <div className="type-wrap select-none text-neutral/70 text-2xl lg:text-3xl font-secondary-font w-15 rounded-md rounded-tr-none rounded-br-none left-[-6rem] lg:left-[-7.5rem] top-12 z-40 bg-red absolute flex justify-center items-center">
        <p className="animate-pulse typed-cursor">toggle theme</p>
      </div>
      <ul className="flex flex-col w-full bg-secondary border-2 border-secondary/70 p-3">
        <li className="flex items-center gap-1">
          <div className="badge badge-lg bg-[#147b74] border-secondary z-20"></div>
          <button
            data-set-theme="default"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost text-neutral w-full relative right-8 z-30"
          >
            default
          </button>
        </li>
        <li className="flex items-center gap-1">
          <div className="badge badge-lg bg-[#c4032a] border-secondary z-20"></div>
          <button
            data-set-theme="red"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost text-neutral w-full relative right-12 z-30"
          >
            red
          </button>
        </li>
        <li className="flex items-center gap-1">
          <div className="badge badge-lg bg-[#df4996] border-secondary z-20"></div>
          <button
            data-set-theme="pink"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost text-neutral w-full relative right-[2.88rem] z-30"
          >
            pink
          </button>
        </li>
        <li className="flex items-center gap-1">
          <div className="badge badge-lg bg-[#207ecc] border-secondary z-20"></div>
          <button
            data-set-theme="blue"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost text-neutral w-full relative right-[2.85rem] z-30"
          >
            blue
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeChange;
