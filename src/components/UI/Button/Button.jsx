import React from "react";

import classes from "./Button.module.scss";

const Button = ({ size, click, children }) => (
  <button
    className={[classes.Button, classes[`Button--${size}`]].join(" ")}
    onClick={click}
  >
    {children}
  </button>
);

export default Button;
