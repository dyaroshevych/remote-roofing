import React from "react";

import classes from "./Label.module.scss";

const Label = ({ appearance, name, children }) => (
  <label
    className={[classes.Label, classes[`Label___${appearance}`]].join(" ")}
    htmlFor={`field_${name}`}
  >
    {children}
  </label>
);

export default Label;
