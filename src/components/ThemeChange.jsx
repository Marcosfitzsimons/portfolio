import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeChange = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="flex flex-col w-[10rem] absolute right-0 top-0">
      <button
        data-set-theme="default"
        data-act-class="ACTIVECLASS"
        className="btn btn-accent"
      >
        default
      </button>
      <button
        data-set-theme="red"
        data-act-class="ACTIVECLASS"
        className="btn btn-accent"
      >
        red
      </button>
      <button
        data-set-theme="pink"
        data-act-class="ACTIVECLASS"
        className="btn btn-accent"
      >
        pink
      </button>
      <button
        data-set-theme="blue"
        data-act-class="ACTIVECLASS"
        className="btn btn-accent"
      >
        blue
      </button>
    </div>
  );
};

export default ThemeChange;
