import React from "react";
import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./DarkModeToggle.scss";
const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <div className="dark-mode-container">
      <input
        type="checkbox"
        id="dark-mode-toggle"
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <label htmlFor="dark-mode-toggle">
        <div className="button">
          <FontAwesomeIcon
            icon={darkMode.value ? faSun : faMoon}
            className="dark-fa-icon"
          />
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
