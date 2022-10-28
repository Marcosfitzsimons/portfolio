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
      className="animate__animated animate__zoomInRight animate__delay-1s theme-switcher w-[10rem] fixed right-[-9.5rem] top-8 rounded-lg shadow-md shadow-accent/10 cursor-pointer transition-all z-90"
    >
      <div className="open-theme-switcher shadow-md shadow-neutral/20 w-10 h-10 rounded-md rounded-tr-none rounded-br-none left-[-2.5rem] top-0 z-40 bg-red absolute flex justify-center items-center">
        <FaPalette className="text-neutral/80" />
      </div>
      <ul className="flex flex-col w-full border-2 border-secondary/40 p-3 rounded-bl-lg backdrop-blur-xl bg-white/5">
        <li className="flex items-center gap-[.4rem] hover:scale-105 transition-transform">
          <div className="badge badge-lg bg-[#147b74] border-secondary z-20"></div>
          <button
            data-set-theme="default"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost w-full relative right-8 z-30 text-neutral hover:bg-transparent"
          >
            emerald
          </button>
        </li>
        <li className="flex items-center gap-1 hover:scale-105 transition-transform">
          <div className="badge badge-lg bg-[#df4996] border-secondary z-20"></div>
          <button
            data-set-theme="pink"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost w-full relative right-[2.88rem] z-30 text-neutral hover:bg-transparent"
          >
            pink
          </button>
        </li>
        <li className="flex items-center gap-[.4rem] hover:scale-105 transition-transform">
          <div className="badge badge-lg bg-[#818cf8] border-secondary z-20"></div>
          <button
            data-set-theme="indigo"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost w-full relative right-[2.41rem] z-30 text-neutral hover:bg-transparent"
          >
            indigo
          </button>
        </li>
        <li className="flex items-center gap-[.4rem] hover:scale-105 transition-transform">
          <div className="badge badge-lg bg-[#EAB308] border-secondary z-20"></div>
          <button
            data-set-theme="yellow"
            data-act-class="ACTIVECLASS"
            className="btn btn-ghost w-full relative right-[2.85rem] z-30 text-neutral hover:bg-transparent"
          >
            gold
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeChange;
