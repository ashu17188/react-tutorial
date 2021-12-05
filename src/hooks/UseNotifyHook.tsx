import React, { Context, useContext } from "react";
import { clearNotify, updateNotify } from "../store/action";
import { StoreContext } from "../store/index";

const NOTIFY_TIME = 3000;

const UseNotifyHook = (StoreContext: Context<any>) => {
  const [, dispatch] = useContext(StoreContext);

  const clearNotification = () => {
    setTimeout(() => {
      dispatch(clearNotify());
    }, NOTIFY_TIME);
  };
  const notifyUser = (message: string, isError = false) => {
    dispatch(
      updateNotify({
        isActive: true,
        message,
        isError,
      })
    );
    clearNotification();
  };

  return { notifyUser };
};

export default UseNotifyHook;
