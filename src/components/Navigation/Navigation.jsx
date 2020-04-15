import React from "react";

import { Wrapper } from "../../hoc";
import { Button, Logo } from "../";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  const links = [
    {
      name: "Residential",
      linkTo: "residential",
    },
    {
      name: "Commercial",
      linkTo: "commercial",
    },
    {
      name: "Contact",
      linkTo: "contact",
    },
  ];

  return (
    <nav className={classes.Navigation}>
      <Wrapper>
        <ul className={classes.Navigation_list}>
          <li className={classes.Navigation_groupContainer}>
            <ul className={classes.Navigation_group}>
              <li className={classes.Navigation_linkContainer}>
                <Logo />
              </li>
              {links.map((link) => (
                <li
                  className={classes.Navigation_linkContainer}
                  key={`navigation-link-${link.linkTo}`}
                >
                  <a
                    href={`#/${link.linkTo}`}
                    className={classes.Navigation_link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className={classes.Navigation_groupContainer}>
            <ul className={classes.Navigation_group}>
              <li className={classes.Navigation_linkContainer}>
                <a href="#/" className={classes.Navigation_link}>
                  Log In
                </a>
              </li>
              <li className={classes.Navigation_linkContainer}>
                <Button size={"md"}>Get Inspection</Button>
              </li>
            </ul>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
};

export default Navigation;
