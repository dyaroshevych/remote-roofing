import React from "react";

import classes from "./Button.module.scss";

const Button = ({ size, children }) => (
  <button className={[classes.Button, classes[`Button--${size}`]].join(" ")}>
    {children}
  </button>
);

export default Button;
