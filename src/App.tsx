import logo from "./logo.svg";
import "./App.scss";
import ComB from "./ComB";
import ComC from "./ComC";
import { createContext } from "react";

const FirstName = createContext("");

const App = () => {
  return (
    <section className="app">
      <div className="container">
        <div className="inner">
          <span>i</span>
          <h1>Hey</h1>
          <p>
            This is informative card that will tell you something wonderful...
          </p>
        </div>
      </div>
    </section>
  );
};

export default App;
export { FirstName };
