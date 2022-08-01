import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import ThemeChange from './components/ThemeChange';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Aside />
        <MainContent />
        <ThemeChange />
      </div>
    </div>
  );
}

export default App;
