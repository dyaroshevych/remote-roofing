import React from "react";

import classes from "./Button.module.scss";

const Button = ({ size, click, children, className }) => (
  <button
    className={[classes.Button, classes[`Button--${size}`], className].join(
      " "
    )}
    onClick={click}
  >
    {children}
  </button>
);

export default Button;
