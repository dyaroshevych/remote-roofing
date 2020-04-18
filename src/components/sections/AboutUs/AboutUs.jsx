import React from "react";

import { Section, Wrapper } from "../../../hoc";
import { Logo } from "../../UI";

import classes from "./AboutUs.module.scss";

const AboutUs = () => (
  <Section className={classes.AboutUs}>
    <Wrapper>
      <div className={classes.AboutUs_container}>
        <div className={classes.AboutUs_textContainer}>
          <h2>About Us</h2>
          <p>
            Remote Roofing’s was founded with a mission to promote transparency
            and data-driven decision making when homeowners and property owners
            get their roof repaired and replaced. Remote Roofing leverages
            artificial intelligence and satellite imagery in order to remotely
            assess roofing damage on buildings. Our proprietary approach to
            roofing allows us to provide highly accurate and objective
            information to our customers. Your free, remote inspection is only
            one click away with Remote Roofing.
          </p>
        </div>
        <div className={classes.AboutUs_logoContainer}>
          <Logo />
        </div>
      </div>
    </Wrapper>
  </Section>
);

export default AboutUs;
