import React from "react";

import classes from "./ContactForm.module.scss";

import { Field, Button } from "../";

const ContactForm = ({ address }) => {
  const fields = [
    {
      name: "address",
      value: address,
      placeholder: "Address",
      isRequired: true,
      maxChars: 200,
      isReadonly: true,
    },
    {
      name: "name",
      placeholder: "Name",
      isRequired: true,
      maxChars: 60,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      isRequired: true,
      maxChars: 100,
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Phone number",
      isRequired: true,
      maxChars: 30,
    },
    {
      name: "name",
      type: "textarea",
      placeholder: "Notes (optional)",
    },
  ];

  return (
    <form className={classes.ContactForm} action="/" method="POST">
      <h3>Get Inspection</h3>
      {fields.map((field, idx) => (
        <div className={classes.ContactForm_field} key={idx}>
          <Field {...field} />
        </div>
      ))}
      <Button size="md">Submit</Button>
    </form>
  );
};

export default ContactForm;
