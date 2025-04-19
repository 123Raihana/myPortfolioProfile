import "./App.css";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import MyIntro from "./components/MyIntro";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { WiSolarEclipse } from "react-icons/wi";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <div className="switch">
          <h6>
            {" "}
            <WiSolarEclipse className="sun" />{" "}
            <WiMoonWaxingCrescent4 className="moon" />{" "}
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </h6>
        </div>
        <Home />

        <MyIntro />
        <Services />
        <Portfolio />
        <Testimonial />
        <Blog />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
