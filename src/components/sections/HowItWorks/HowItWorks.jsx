import React from "react";

import { Section, Wrapper } from "../../../hoc";

import {
  satelliteSvg,
  contractSvg,
  joistSvg,
} from "../../../assets/img/icons/howItWorks";
import classes from "./HowItWorks.module.scss";

const HowItWorksSection = () => {
  const process = [
    {
      iconLink: satelliteSvg,
      name: "Free Inspection",
      description:
        "Enter your address and contact information. Our system conducts a Remote Roofing Inspection. Our team will contact you within 24 hours and go over our free report regarding the condition of your roof.",
    },
    {
      iconLink: contractSvg,
      name: "File a Claim",
      description:
        "If your roof has damages that are covered under your insurance policy, we will help you file a claim with your provider. Because of our data-centric approach to roof damage assessment, claims filed by Remote Roofing have a higher chance of being approved.",
    },
    {
      iconLink: joistSvg,
      name: "Replace or Repair Roof",
      description:
        "Once a claim is approved, we work with you to repair your roof. You can rest assured that you are in good hands when you work with Remote Roofing’s GAF Certified team. If a claim is denied by your insurance, we give you a competitive offer to complete the work and price match with other contractors as well.",
    },
  ];
  return (
    <Section className={classes.HowItWorks} title="How it works">
      <Wrapper>
        <h2>How it Works</h2>
        <div className={classes.HowItWorks_process}>
          {process.map(({ iconLink, name, description }, idx) => (
            <div className={classes.HowItWorks_step} key={idx}>
              <div className={classes.HowItWorks_stepImageContainer}>
                <img
                  src={iconLink}
                  alt={name}
                  className={classes.HowItWorks_stepImage}
                />
              </div>
              <h3>
                <span>Step {idx + 1}: </span>
                {name}
              </h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default HowItWorksSection;
