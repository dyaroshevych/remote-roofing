import React from "react";

import { Section, Wrapper } from "../../../hoc";
import { Form } from "../../UI";

import classes from "./ContactPage.module.scss";

const ContactPage = () => (
  <div className={classes.ContactPage}>
    <Section className={classes.ContactPage_header}>
      <Wrapper>
        <h1>Get in touch with Remote Roofing</h1>
        <h3>Fill out the form and we'll be in touch as soon as possible.</h3>
        <h3>Our team is happy to answer your sales questions.</h3>
      </Wrapper>
    </Section>
    <Wrapper>
      <div className={classes.ContactFormContainer}>
        <Form
          submit="https://formspree.io/mvobjqar"
          appearance="box"
          fields={[
            {
              name: "firstName",
              placeholder: "First name",
              required: true,
              maxLength: 30,
            },
            {
              name: "lastName",
              placeholder: "Last name",
              required: true,
              maxLength: 30,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email",
              required: true,
              maxLength: 100,
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone number",
              required: true,
              maxLength: 30,
            },
            {
              name: "notes",
              type: "textarea",
              placeholder: "Notes (optional)",
            },
          ]}
        />
      </div>
    </Wrapper>
  </div>
);

export default ContactPage;
