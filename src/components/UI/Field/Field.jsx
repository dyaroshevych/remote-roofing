import React from "react";

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
