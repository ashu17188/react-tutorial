import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../store/index";
import "./NotifyMain.scss";
const NotifyMain = () => {
  const [globalState] = useContext(StoreContext);
  const { isActive, message, isError } = globalState;
  if (!isActive) return null;

  const title = isError ? "Error" : "Success";
  const icon = isError ? "/error.svg" : "/success.svg";

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={icon} alt={title} className="notify-image" />
        <div>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default NotifyMain;
