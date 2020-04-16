import React from "react";

import { Section, Wrapper } from "../../../hoc";

import {
  chimneySvg,
  guttersPng,
  hailSvg,
  pipeSvg,
  windSvg,
} from "../../../assets/img/icons/typesOfDamage";
import classes from "./TypesOfDamage.module.scss";

const TypesOfDamage = () => {
  const types = [
    {
      iconUrl: chimneySvg,
      name: "Rotting Fascia",
      description:
        "Fascia is a lower part of the roof that covers the eaves of your home. Built-up debris can lead to rotten fascia. This is because of extended moisture exposure. A leaking fascia is important to repair because moisture gets into the eaves. Mold and rot can spread once inside and cause even bigger problems. The best time to fix a fascia is when the roof is being replaced.",
    },
    {
      iconUrl: guttersPng,
      name: "Clogged Gutters",
      description:
        "Debris reacts with water to form a sludge that can reduce the life of your gutters by adding excessive weight and attacking the metal coatings. Clogged gutters also cause water to overflow. This overflow can eventually cause problems with your foundation and more. Built-up debris in gutters also can become a nesting site for insects and vermin, and a breeding ground for mosquitoes.",
    },
    {
      iconUrl: windSvg,
      name: "Wind Damage",
      description:
        "When we think of Mother Nature’s fury, we think of wind damage. Exceeding 60 mph sometimes, wind can lift shingles from your roof. The wind may blow with such force that it picks up objects and hurls them at your home. Keep an eye out after heavy windstorms for any damage to your roof or home.",
    },
    {
      iconUrl: hailSvg,
      name: "Hail Damage",
      description:
        "Hail is a nasty little favorite of Mother Nature. It can cause severe damage to anything in its path or left in the open. Even dime-sized hail can do some serious damage. Your roof protects you from this element, but what protects your roof? Nothing. That's why catching hail damage early is important before it causes more problems down the road.",
    },
    {
      iconUrl: pipeSvg,
      name: "Deteriorated Pipe Boot",
      description:
        "A vent pipe boot consists of a metal or plastic base with a rubber, dome-shaped boot that fits snugly over a plastic vent pipe. The base lies flat against the roof with its top portion covered by the shingles to shed water. The most common failure occurs when the boot cracks or peels, allowing water into the roof penetration.",
    },
  ];

  return (
    <Section className={classes.TypesOfDamage}>
      <Wrapper>
        <h2 className="heading___secondary">Types of Roofing Damage</h2>
        <div className={classes.TypesOfDamage_container}>
          {types.map((item, idx) => (
            <div key={idx} className={classes.TypesOfDamage_item}>
              <div className={classes.TypesOfDamage_itemIconContainer}>
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className={classes.TypesOfDamage_itemIcon}
                />
              </div>
              <div className={classes.TypesOfDamage_itemTextContainer}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default TypesOfDamage;
