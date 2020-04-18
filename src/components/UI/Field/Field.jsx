import React from "react";
import AlgoliaPlaces from "algolia-places-react";

import classes from "./Field.module.scss";

const Field = ({
  name,
  type = "text",
  defaultValue = "",
  placeholder = "",
  required = false,
  maxLength = 1000,
  readOnly = false,
  appearance = "inline",
}) => (
  <div className={[classes.Field, classes[`Field___${appearance}`]].join()}>
    <label
      className={[
        classes.Field_label,
        classes[`Field_label___${appearance}`],
      ].join(" ")}
      htmlFor={`field_${name}`}
    >
      {placeholder}:
    </label>
    {type === "textarea" ? (
      <textarea
        className={[
          classes.Field_textarea,
          classes[`Field_textarea___${appearance}`],
        ].join(" ")}
        {...{ name, defaultValue, placeholder, maxLength, readOnly }}
        rows="3"
        id={`field_${name}`}
      ></textarea>
    ) : name === "address" && readOnly === false ? (
      <AlgoliaPlaces
        className={[
          classes.Field_input,
          classes[`Field_input___${appearance}`],
        ].join(" ")}
        id={`navigation-address`}
        placeholder="Address"
        options={{
          appId: "pl0FDSAOXLGH",
          apiKey: "6f6e1961877c7ac0d0573e26d3a66e42",
          language: "en",
          countries: ["us"],
          type: "address",
        }}
      />
    ) : (
      <input
        className={[
          classes.Field_input,
          classes[`Field_input___${appearance}`],
        ].join(" ")}
        {...{
          name,
          type,
          defaultValue,
          placeholder,
          required,
          maxLength,
          readOnly,
        }}
        id={`field_${name}`}
      />
    )}
  </div>
);

export default Field;
