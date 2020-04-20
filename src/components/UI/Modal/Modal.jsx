import React from "react";

import classes from "./Modal.module.scss";

import { Backdrop } from "../";

const Modal = ({ isVisible, changeVisibility, children }) => {
  return (
    <>
      <Backdrop {...{ isVisible, changeVisibility }} />
      <div className={classes.Modal} isvisible={String(isVisible)}>
        <button
          className={classes.Modal_close}
          onClick={changeVisibility}
        ></button>
        {children}
      </div>
    </>
  );
};

export default Modal;
