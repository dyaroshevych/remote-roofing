import React from "react";

import { WideSection } from "../../../hoc";
import { InspectionForm } from "../../UI";

import classes from "./Inspection.module.scss";

const Inspection = () => (
  <WideSection className={classes.Inspection}>
    <h2>Get your free roofing estimate</h2>
    <p>in less time than it takes to put out the garbage</p>
    <InspectionForm />
  </WideSection>
);

export default Inspection;
