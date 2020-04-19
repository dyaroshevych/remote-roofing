import React from "react";

import classes from "./Field.module.scss";

const Textarea = ({
  name,
  defaultValue = "",
  placeholder = "",
  maxLength = 1000,
  readOnly = false,
  appearance = "inline",
}) => (
  <textarea
    className={[
      classes.Field_textarea,
      classes[`Field_textarea___${appearance}`],
    ].join(" ")}
    {...{ name, defaultValue, placeholder, maxLength, readOnly }}
    rows="3"
    id={`field_${name}`}
  ></textarea>
);

export default Textarea;
