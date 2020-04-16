import React from "react";

import classes from "./Backdrop.module.scss";

const Backdrop = ({ isVisible, changeVisibility }) => (
  <div
    className={classes.Backdrop}
    isvisible={String(isVisible)}
    onClick={changeVisibility}
  ></div>
);

export default Backdrop;
