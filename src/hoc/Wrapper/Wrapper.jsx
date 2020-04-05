import React from "react";

import "./Wrapper.scss";

const Wrapper = ({ className, children }) => (
  <div className={`wrapper${className ? ` ${className}` : ""}`}>{children}</div>
);

export default Wrapper;
