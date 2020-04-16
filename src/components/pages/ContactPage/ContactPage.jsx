import React from "react";

import { WideSection, Wrapper } from "../../../hoc";
import { ContactForm } from "../../UI";

import classes from "./ContactPage.module.scss";

const ContactPage = () => (
  <div className={classes.ContactPage}>
    <WideSection className={classes.ContactPage_header}>
      <h1>Get in touch with Remote Roofing</h1>
      <h3>Fill out the form and we'll be in touch as soon as possible.</h3>
      <h3>Our team is happy to answer your sales questions.</h3>
    </WideSection>
    <Wrapper>
      <div className={classes.ContactFormContainer}>
        <ContactForm
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
              name: "name",
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
