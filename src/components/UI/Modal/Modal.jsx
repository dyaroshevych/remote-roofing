import React from "react";

import classes from "./Modal.module.scss";

import { Backdrop } from "../";

const Modal = ({ isVisible, toggleVisibility, children }) => {
  return (
    <>
      <Backdrop {...{ isVisible, toggleVisibility }} />
      <div className={classes.Modal} isvisible={String(isVisible)}>
        <button
          className={classes.Modal_close}
          onClick={toggleVisibility}
        ></button>
        {children}
      </div>
    </>
  );
};

export default Modal;
