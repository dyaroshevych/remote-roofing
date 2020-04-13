import React from "react";

import classes from "./Field.module.scss";

const Field = ({
  name,
  type = "text",
  value = "",
  placeholder = "",
  isRequired = false,
  maxChars = 1000,
  isReadonly = false,
}) => (
  <div className={classes.Field}>
    <label className={classes.Field_label} htmlFor={`field_${name}`}>
      {placeholder}:
    </label>
    {type === "textarea" ? (
      <textarea
        className={classes.Field_textarea}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        maxLength={maxChars}
        rows="3"
        id={`field_${name}`}
        readOnly={isReadonly}
      ></textarea>
    ) : (
      <input
        className={classes.Field_input}
        name={name}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        required={isRequired}
        maxLength={maxChars}
        id={`field_${name}`}
        readOnly={isReadonly}
      />
    )}
  </div>
);

export default Field;
