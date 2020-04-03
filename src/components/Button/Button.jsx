import React from "react";

import "./Button.scss";

const Button = ({ size, children }) => {
  console.log(children);
  return <button className={`button button--${size}`}>{children}</button>;
};

export default Button;
