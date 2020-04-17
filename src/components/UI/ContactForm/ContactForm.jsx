import React from "react";

import classes from "./ContactForm.module.scss";

import { Field, Button } from "../";

const ContactForm = ({ title, appearance = "inline", fields = [] }) => (
  <form
    className={[
      classes.ContactForm,
      classes[`ContactForm___${appearance}`],
    ].join(" ")}
    action="/"
    method="POST"
  >
    {title && <h3>{title}</h3>}
    {fields.map((field, idx) => (
      <div className={classes.ContactForm_field} key={idx}>
        <Field {...{ ...field, appearance }} />
      </div>
    ))}
    <Button size={appearance === "box" ? "lg" : "md"}>Submit</Button>
  </form>
);

export default ContactForm;
