import React from "react";

import { Wrapper, Section } from "../../../hoc";

import classes from "./Services.module.scss";
import {
  asphaltPng,
  cedarPng,
  commercialPng,
  copperPng,
  flatPng,
  metalPng,
  repairPng,
  replacePng,
  slatePng,
} from "../../../assets/img/icons/services";

const Services = () => {
  const services = [
    {
      iconUrl: replacePng,
      name: "Roof Replacement",
      description:
        "We specialize in asphalt roof replacement services, including shingle removal, and vent replacement.",
    },
    {
      iconUrl: commercialPng,
      name: "Commercial roofing",
      description:
        "Our commercial roofers offer a variety of services, including repairs, replacement, and maintenance.",
    },
    {
      iconUrl: repairPng,
      name: "Roof repair",
      description:
        "If you need a roof replacement - fast, our contractors can assess and repair your roof, so you can better plan for your replacement.",
    },
    {
      iconUrl: copperPng,
      name: "Copper roofing",
      description:
        "Copper features and roofs are works of art. Our Copper Roofing experts have years of experience complementing the beauty of the homes they're applied to.",
    },
    {
      iconUrl: metalPng,
      name: "Metal roofing",
      description:
        "Metal roofs are beautiful, but also have a longevity far exceeding traditional asphalt roofs. We can assist in pricing your metal roofing project, and find you a vetted, local contractor.",
    },
    {
      iconUrl: asphaltPng,
      name: "Asphalt roofing",
      description:
        "Asphalt roofs are very common, and will provide great coverage for years to come. Most of our clients have asphalt shingles, we've helped them select the best product for their budget and aesthetic desires.",
    },
    {
      iconUrl: cedarPng,
      name: "Cedar roofing",
      description:
        "Strong, rustic, timeless. Cedar is one of the toughest woods and an eco-friendly solution to your roof replacement. They are insulating and architecturally appealing, a lasting solution you'll always love!",
    },
    {
      iconUrl: slatePng,
      name: "Slate roofing",
      description:
        "Slate roofs have a magical appeal, and a beauty that is unrivaled. Another eco friendly solution, that can last 5 times as long as asphalt roofs, and provide your house with a roof that will likely last a lifetime.",
    },
    {
      iconUrl: flatPng,
      name: "Flat roofing",
      description:
        "Residential and commercial flat roofs, including apartments and housing units, warehouses, and factories require maintenance, repair, and sometimes replacement. We work with the best roofers in your area, providing you additional coverage and security in your roof replacement.",
    },
    {
      iconUrl: asphaltPng,
      name: "Tile roofing",
      description:
        "The beauty that you desire, with the longevity that you deserve. We work with the industries best installers to give you a tile roofing product that will look amazing while giving you decades of that timeless curb appeal.",
    },
    {
      iconUrl: asphaltPng,
      name: "TPO roofing",
      description:
        "TPO is one of the most popular flat roofing materials out there at the moment. This is a single ply application that stretches over the entire roof, and is not only energy efficient, but also a bit more economical than other roofing systems.",
    },
    {
      iconUrl: asphaltPng,
      name: "EPDM roofing",
      description:
        "EPDM is a very popular single ply flat roofing option for you or your building. It is a synthetic rubber commonly used in single-ply roofing because it is simple to apply that is covered in adhesive, and factory applied tape, resulting in a faster installation.",
    },
  ];

  return (
    <Section className={classes.Services}>
      <Wrapper>
        <h2>Services</h2>
        <div className={classes.Services_container}>
          {services.map((service) => (
            <div key={service.name} className={classes.Services_item}>
              <img
                src={service.iconUrl}
                alt={service.name}
                className={classes.Services_itemImage}
              />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Services;
