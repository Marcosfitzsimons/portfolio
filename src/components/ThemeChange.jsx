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

  const colors = [
    {
      id: 1,
      badgeColor: "#0d9488",
      dataSetTheme: "default",
      text: "emerald",
    },
    {
      id: 2,
      badgeColor: "#df4996",
      dataSetTheme: "pink",
      text: "pink",
    },
    {
      id: 3,
      badgeColor: "#818cf8",
      dataSetTheme: "indigo",
      text: "indigo",
    },
    {
      id: 4,
      badgeColor: "#EAB308",
      dataSetTheme: "yellow",
      text: "gold",
    },
  ];

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
        {colors.map((color) => (
          <li
            className="flex items-center gap-3 text-slate-300 hover:text-white p-2 rounded-lg hover:bg-zinc-700/60"
            key={color.id}
          >
            <div
              className={`badge badge-lg bg-[${color.badgeColor}] border-secondary`}
            ></div>
            <button
              data-set-theme={color.dataSetTheme}
              data-act-class="ACTIVECLASS"
              className="w-full text-start uppercase tracking-wide"
            >
              {color.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeChange;
