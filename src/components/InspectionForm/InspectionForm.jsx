import React from "react";

import { Button } from "../";

import classes from "./InspectionForm.module.scss";

const InspectionForm = ({ source, forwardedRef = null }) => (
  <form method="POST" action="/" className={classes.InspectionForm}>
    <label
      htmlFor={`${source}-inspection-form`}
      className={classes.InspectionForm_label}
    >
      Enter your address to start!
    </label>
    <input
      type="email"
      placeholder="Enter your address to start!"
      required
      className={classes.InspectionForm_input}
      id={`${source}-inspection-form`}
      ref={forwardedRef}
    />
    <Button size="lg">Get Inspection</Button>
  </form>
);

export default InspectionForm;
