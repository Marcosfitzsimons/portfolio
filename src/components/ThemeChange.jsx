import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { FaPalette } from "react-icons/fa";
import "animate.css";

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
      className="animate__animated animate__zoomInRight animate__delay-1s theme-switcher w-[10rem] fixed right-[-9.5rem] top-8 rounded-lg shadow-md shadow-neutral/20 cursor-pointer transition-all z-90"
    >
      <div className="open-theme-switcher shadow-md shadow-neutral/20 w-10 h-10 rounded-md rounded-tr-none rounded-br-none left-[-2.5rem] top-0 z-40 bg-red absolute flex justify-center items-center">
        <FaPalette className="text-neutral/80" />
      </div>
      <div className="type-wrap select-none cursor-default text-neutral/60 text-2xl lg:text-3xl font-secondary-font w-15 rounded-md rounded-tr-none rounded-br-none left-[-8.5rem] lg:left-[-10rem] top-[0.2rem] bg-red absolute flex justify-center items-center">
        <p className="typed-cursor animate__animated animate__pulse animate__delay-2s">
          toggle theme
        </p>
      </div>
      <ul className="flex flex-col w-full bg-secondary border-2 border-secondary/70 p-3">
        <li className="flex items-center gap-[.4rem]">
          <div className="badge badge-lg bg-[#147b74] border-secondary z-20"></div>
          <button
            data-set-theme="default"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost w-full relative right-8 z-30 text-neutral hover:opacity-70"
          >
            emerald
          </button>
        </li>
        <li className="flex items-center gap-1">
          <div className="badge badge-lg bg-[#c4032a] border-secondary z-20"></div>
          <button
            data-set-theme="red"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost w-full relative right-12 z-30 text-neutral hover:opacity-70"
          >
            red
          </button>
        </li>
        <li className="flex items-center gap-1">
          <div className="badge badge-lg bg-[#df4996] border-secondary z-20"></div>
          <button
            data-set-theme="pink"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost w-full relative right-[2.88rem] z-30 text-neutral hover:opacity-70"
          >
            pink
          </button>
        </li>
        <li className="flex items-center gap-[.4rem]">
          <div className="badge badge-lg bg-[#0891B2] border-secondary z-20"></div>
          <button
            data-set-theme="cyan"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost w-full relative right-[2.85rem] z-30 text-neutral hover:opacity-70"
          >
            cyan
          </button>
        </li>
        <li className="flex items-center gap-[.4rem]">
          <div className="badge badge-lg bg-[#EAB308] border-secondary z-20"></div>
          <button
            data-set-theme="yellow"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost w-full relative right-[2.85rem] z-30 text-neutral hover:opacity-70"
          >
            gold
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeChange;
