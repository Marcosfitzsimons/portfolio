import React from "react";
import { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import { FaPalette } from "react-icons/fa";

const ThemeChange = () => {
  const [isShown, setIsShown] = useState(false);

  const handleIsShown = () => {
    setIsShown((prevValue) => !prevValue);
  };

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div
      onClick={handleIsShown}
      className={`${
        isShown ? "-right-1" : "right-[-9.5rem]"
      } w-[10rem] fixed top-8 rounded-lg rounded-tl-none cursor-pointer transition-all z-50 border border-zinc-600`}
    >
      <div className="open-theme-switcher w-10 h-10 rounded-md rounded-tr-none rounded-br-none left-[-2.5rem] -top-[1px] z-40 bg-red absolute flex justify-center items-center">
        <FaPalette className="text-neutral/80" />
      </div>
      <ul className="flex flex-col w-full py-3 px-1 pr-2 rounded-bl-lg bg-secondary z-50">
        <li className="text-slate-300">
          <button
            data-set-theme="default"
            data-act-class="ACTIVECLASS"
            className="flex items-center gap-3 w-full text-start uppercase tracking-wide text-sm p-2 bg-transparent hover:text-white hover:bg-zinc-700/60 rounded-lg"
          >
            <span
              className={`badge badge-lg bg-[#0d9488] border-secondary`}
            ></span>
            emerald
          </button>
        </li>
        <li className="text-slate-300">
          <button
            data-set-theme="pink"
            data-act-class="ACTIVECLASS"
            className="flex items-center gap-3 w-full text-start uppercase tracking-wide text-sm p-2 bg-transparent hover:text-white hover:bg-zinc-700/60 rounded-lg"
          >
            <span
              className={`badge badge-lg bg-[#df4996] border-secondary`}
            ></span>
            pink
          </button>
        </li>
        <li className="text-slate-300">
          <button
            data-set-theme="indigo"
            data-act-class="ACTIVECLASS"
            className="flex items-center gap-3 w-full text-start uppercase tracking-wide text-sm p-2 bg-transparent hover:text-white hover:bg-zinc-700/60 rounded-lg"
          >
            <span
              className={`badge badge-lg bg-[#818cf8] border-secondary`}
            ></span>
            indigo
          </button>
        </li>
        <li className="text-slate-300">
          <button
            data-set-theme="yellow"
            data-act-class="ACTIVECLASS"
            className="flex items-center gap-3 w-full text-start uppercase tracking-wide text-sm p-2 bg-transparent hover:text-white hover:bg-zinc-700/60 rounded-lg"
          >
            <span
              className={`badge badge-lg bg-[#EAB308] border-secondary`}
            ></span>
            gold
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeChange;
