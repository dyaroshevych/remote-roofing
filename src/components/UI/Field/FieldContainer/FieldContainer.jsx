import React from "react";

import classes from "./FieldContainer.module.scss";

const FieldContainer = ({ appearance, className, children }) => (
  <div className={[classes.FieldContainer, className].join(" ")}>
    {children}
  </div>
);

export default FieldContainer;
