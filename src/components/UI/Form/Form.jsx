import React from "react";

import classes from "./Form.module.scss";

import { Field, Button } from "../";

const Form = ({ submit, title, appearance = "inline", fields = [] }) => (
  <form
    className={[classes.Form, classes[`Form___${appearance}`]].join(" ")}
    action={submit}
    method="POST"
  >
    {title && <h3>{title}</h3>}
    {fields.map((field, idx) => (
      <Field
        {...{ ...field, appearance }}
        className={classes.Form_field}
        key={idx}
      />
    ))}
    <Button size={appearance === "box" ? "lg" : "md"}>Submit</Button>
  </form>
);

export default Form;
