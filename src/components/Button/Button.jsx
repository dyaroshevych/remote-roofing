import React from "react";

import "./Button.scss";

const Button = ({ size, children }) => (
  <button className={`button button--${size}`}>{children}</button>
);

export default Button;
