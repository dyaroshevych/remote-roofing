import React from "react";

import "./Section.scss";

const Section = ({ className, children }) => (
  <section className={`section${className ? ` ${className}` : ""}`}>
    {children}
  </section>
);

export default Section;
