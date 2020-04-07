import React from "react";

import classes from "./Section.module.scss";

const Section = ({ className, children }) => (
  <section
    className={
      className ? [classes.Section, className].join(" ") : classes.Section
    }
  >
    {children}
  </section>
);

export default Section;
