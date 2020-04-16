import React from "react";

import { Wrapper } from "../";

import classes from "./WideSection.module.scss";

const WideSection = ({ className, children }) => (
  <section className={[classes.WideSection, className].join(" ")}>
    <Wrapper>{children}</Wrapper>
  </section>
);

export default WideSection;
