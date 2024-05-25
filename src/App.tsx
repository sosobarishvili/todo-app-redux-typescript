import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import dark from "./assets/bg-desktop-dark.jpg";
import light from "./assets/bg-desktop-light.jpg";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import { useState } from "react";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div className={`whole-container ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <img className="active-background" src={isLightMode ? light : dark} alt="" />
      <div className="main-container">
        <div className="modes">
          <h1>T O D O</h1>
          <img className="sun-moon" src={isLightMode ? moon : sun} alt="mode icon" onClick={toggleMode} />
        </div>
        <TodoForm />
        <div className="list-container">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;