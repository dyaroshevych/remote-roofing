import React from "react";

import { Section, Wrapper } from "../../hoc";

import {
  residential1Jpg,
  residential2Jpg,
  residential3Jpg,
} from "../../assets/img/residential";
import classes from "./Residential.module.scss";

const Residential = () => {
  const data = [
    {
      imageUrl: residential1Jpg,
      title: "State-of-the-Art Roofing Technology",
      text:
        "Remote Roofing is the premier choice in the roofing industry. We pride ourselves for being technology pioneers in the roofing industry. Our proprietary satellite imagery algorithm allows us to detect various degrees of damage which otherwise cannot be seen. We have also digitized the legal process so you can get your new roof all through your computer!",
    },
    {
      imageUrl: residential2Jpg,
      title: "Customizable Solutions",
      text:
        "At Remote Roofing, we pride ourselves in differentiating from the competition. When weapproach each project, we understand that each client is unique. We develop acustomized solution to satisfy the needs of that job and familiarize clients with theinformation that’s most relative to them and their home.",
    },
    {
      imageUrl: residential3Jpg,
      title: "GAF-Certified Contractor",
      text:
        "You can rest assured that you are in good hands when you work with Remote Roofing’sGAF Certified team. GAF's factory certification program provides ongoingtraining to roofing contractors and assurance to you that the roof will becompleted well and professionally. Only 3% of all roofing contractors havequalified as Master Elite. Choosing Remote Roofing is your assurance thatyou will be dealing with a professional contractor.",
    },
  ];

  return (
    <Section className={classes.Residential}>
      <Wrapper>
        {data.map(({ imageUrl, title, text }, idx) => (
          <div key={idx} className={classes.Residential_item}>
            <div className={classes.Residential_imageContainer}>
              <img
                src={imageUrl}
                alt={title}
                className={classes.Residential_image}
              />
            </div>
            <div className={classes.Residential_textContainer}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Residential;
