import React from "react";

import classes from "./Textarea.module.scss";

const Textarea = ({
  name,
  defaultValue,
  placeholder,
  maxLength,
  appearance,
}) => (
  <textarea
    className={[classes.Textarea, classes[`Textarea___${appearance}`]].join(
      " "
    )}
    {...{ name, defaultValue, placeholder, maxLength }}
    rows="3"
    id={`field_${name}`}
  ></textarea>
);

export default Textarea;
