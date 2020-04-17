import React from "react";

import { Wrapper, Section } from "../../../hoc";
import { Button } from "../../UI";

import classes from "./Services.module.scss";
import { residentialJpg, commercialJpg } from "../../../assets/img/services";

const Services = () => {
  const services = [
    {
      name: "Residential Roofing",
      description: `Here at Remote Roofing, we understand how much our customers
        value their home and how integral a roof is in protecting that home. This is why our
        professionals make sure that the job gets done correctly and with the attention that we
        would put into our own home. Remote Roofing is at the forefront of roofing technology and
        trends, which will help you save time and money when you have an issue with your roof.
        From start to finish, Remote Roofing provides you with great service that you deserve.`,
      imageUrl: residentialJpg,
      linkTo: "/residential",
    },
    {
      name: "Commercial roofing",
      description: `No matter what type of business you own, roofing leaks and damages
        can disrupt your business and even cause it to close. Remote Roofing helps assess your
        building to see if you’re at risk and to address the issue before it happens. The last thing you
        want is to be in a legal battle with your insurance over the value of equipment and
        merchandise that you have lost. Get ahead of the game and get your free, remote inspection
        today.
        `,
      imageUrl: commercialJpg,
      linkTo: "/commercial",
    },
  ];

  return (
    <Section className={classes.Services}>
      <Wrapper>
        <h2>Services</h2>
        <div className={classes.Services_container}>
          {services.map(({ name, description, imageUrl, linkTo }) => (
            <div key={name} className={classes.Services_item}>
              <div className={classes.Services_itemImageContainer}>
                <img
                  src={imageUrl}
                  alt={name}
                  className={classes.Services_itemImage}
                />
              </div>
              <div className={classes.Services_itemTextContainer}>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={`#${linkTo}`}>
                  <Button size="md">Read more</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Services;
