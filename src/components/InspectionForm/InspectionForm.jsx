import React from "react";

import { Button } from "../";

import "./InspectionForm.scss";

const InspectionForm = ({ source, forwardedRef = null }) => (
  <form method="POST" action="/" className="inspection-form">
    <label
      htmlFor={`${source}-inspection-form`}
      className="inspection-form__label"
    >
      Enter your address to start!
    </label>
    <input
      type="email"
      placeholder="Enter your address to start!"
      required
      className="inspection-form__input"
      id={`${source}-inspection-form`}
      ref={forwardedRef}
    />
    <Button size="lg">Get Inspection</Button>
  </form>
);

export default InspectionForm;
