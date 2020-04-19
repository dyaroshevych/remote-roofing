import React from "react";
import AlgoliaPlaces from "algolia-places-react";

import { Input, Textarea } from "./";

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
      <Textarea
        {...{
          appearance,
          name,
          defaultValue,
          placeholder,
          maxLength,
          readOnly,
        }}
      />
    ) : (
      <Input
        {...{
          name,
          type,
          defaultValue,
          placeholder,
          required,
          maxLength,
          readOnly,
          appearance,
        }}
      />
    )}
  </div>
);

export default Field;
