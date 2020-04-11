import React, { useState } from "react";
import AlgoliaPlaces from "algolia-places-react";

import { Button } from "../";

import classes from "./InspectionForm.module.scss";

const InspectionForm = ({ source, forwardedRef = null }) => {
  const [address, setAddress] = useState("");

  return (
    <div className={classes.InspectionForm}>
      <label
        htmlFor={`${source}-inspection-form`}
        className={classes.InspectionForm_label}
        ref={forwardedRef}
      >
        Enter your address to start!
      </label>
      <AlgoliaPlaces
        className={classes.InspectionForm_input}
        id={`${source}-inspection-form`}
        placeholder="Enter your address to start!"
        options={{
          appId: "pl0FDSAOXLGH",
          apiKey: "6f6e1961877c7ac0d0573e26d3a66e42",
          language: "en",
          countries: ["us"],
          type: "city",
        }}
        onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
          setAddress(suggestion.value)
        }
      />
      <Button size="lg">Get Inspection</Button>
    </div>
  );
};

export default InspectionForm;
