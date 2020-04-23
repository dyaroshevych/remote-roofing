import React from "react";

import classes from "./Backdrop.module.scss";

const Backdrop = ({ isVisible, toggleVisibility }) => (
  <div
    className={classes.Backdrop}
    isvisible={String(isVisible)}
    onClick={toggleVisibility}
  ></div>
);

export default Backdrop;
