import React from "react";

import { Section, Wrapper } from "../../../hoc";
import { InspectionForm } from "../../UI";

import classes from "./Inspection.module.scss";

const Inspection = () => (
  <Section className={classes.Inspection}>
    <Wrapper>
      <h2>Get your free roofing estimate</h2>
      <p>in less time than it takes to put out the garbage</p>
      <InspectionForm />
    </Wrapper>
  </Section>
);

export default Inspection;
