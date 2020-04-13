import React from "react";

import classes from "./Button.module.scss";

const Button = ({ size, onClick, children }) => (
  <button
    className={[classes.Button, classes[`Button--${size}`]].join(" ")}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
