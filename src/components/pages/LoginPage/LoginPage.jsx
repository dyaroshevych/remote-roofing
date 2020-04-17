import React from "react";

import { Section, Wrapper } from "../../../hoc";
import { Button, ContactForm } from "../../UI";

import classes from "./LoginPage.module.scss";

const LoginPage = () => (
  <div>
    <Section>
      <Wrapper className={classes.LoginPage}>
        <ContactForm
          title="Sign into your Remote Roofing account"
          appearance="box"
          fields={[
            {
              name: "email",
              type: "email",
              placeholder: "Email",
              required: true,
              maxLength: 100,
            },
            {
              name: "password",
              placeholder: "Password",
              required: true,
              maxLength: 100,
            },
          ]}
        />
        <div className={classes.LoginPage_divider}>or</div>
        <Button size="lg" className={classes.LoginPage_Button}>
          Sign in with Google
        </Button>
      </Wrapper>
    </Section>
  </div>
);

export default LoginPage;
