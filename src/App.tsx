import "./App.scss";
import ComB from "./ComB";
import ComC from "./ComC";
import { createContext } from "react";
import logo from "./images/balloon.png";
import kate from "./images/kate.png";
import mint from "./images/mint.png";
const FirstName = createContext("");

const App = () => {
  return (
    <section className="app">
      <nav>
        <img src={logo} alt="" />

        <ul>
          <li>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">SERVICES</a>
            <a href="#">HIRE ME</a>
          </li>
        </ul>
      </nav>

      <div className="info">
        <div className="info-left">
          <div className="left-content">
            <h1>
              I'm <span>ABC</span> Johnson
            </h1>
            <p>
              This is my official portfolio website to showcase all my work
              related to web development and UI design...
            </p>
            <a href="#">Download CV</a>
          </div>
        </div>
        <div className="info-right">
          <img src={kate} className="kate" alt="Kate Amelia" />
          <img src={mint} className="kateBg" alt="Mint background" />
        </div>
      </div>
    </section>
  );
};

export default App;
export { FirstName };
