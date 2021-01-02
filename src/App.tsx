import logo from "./logo.svg";
import "./App.scss";
import ComB from "./ComB";
import ComC from "./ComC";
import { createContext } from "react";

const FirstName = createContext("");

const App = () => {
  return (
    <>
      <div className="testSass">Test sass dependencies.</div>
      <FirstName.Provider value={"Ashutosh"}>
        <ComC />
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName };
