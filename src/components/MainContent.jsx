import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import NavToggle from "./NavToggle";

const MainContent = ({ isMenu, setIsMenu }) => {
  return (
    <main className="main main-content lg:pl-[280px]">
      <NavToggle setIsMenu={setIsMenu} isMenu={isMenu} />
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
};

export default MainContent;
