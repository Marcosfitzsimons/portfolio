import { useState } from "react";

import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import ThemeChange from './components/ThemeChange';

function App() {
  const [isMenu, setIsMenu] = useState(true);
  return (
    <div className="App">
      <div className="main-container">
        <Aside isMenu={isMenu} setIsMenu={setIsMenu} />
        <MainContent isMenu={isMenu} setIsMenu={setIsMenu} />
        <ThemeChange />
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      </div>
    </div>
  );
}

export default App;
