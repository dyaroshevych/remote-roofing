import React from "react";

import classes from "./Wrapper.module.scss";

const Wrapper = ({ className, children }) => (
  <div
    className={
      className ? [classes.Wrapper, className].join(" ") : classes.Wrapper
    }
  >
    {children}
  </div>
);

export default Wrapper;
