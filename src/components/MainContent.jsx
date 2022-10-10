import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import NavToggle from "./NavToggle";

const MainContent = () => {
  const showAside = () => {
    const aside = document.querySelector(".aside");
    const navToggle = document.querySelector(".nav-toggle");
    navToggle.classList.toggle("active");
    aside.classList.toggle("active");
  };

  return (
    <main className="main main-content lg:pl-[280px]">
      <NavToggle showAside={showAside} />
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
};

export default MainContent;
