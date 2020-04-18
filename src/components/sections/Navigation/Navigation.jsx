import React from "react";
import { withRouter } from "react-router-dom";

import { Wrapper } from "../../../hoc";
import { Button, Logo } from "../../UI";

import classes from "./Navigation.module.scss";

const Navigation = withRouter(({ location }) => {
  const links = [
    {
      name: "Residential",
      linkTo: "/residential",
    },
    {
      name: "Commercial",
      linkTo: "/commercial",
    },
    {
      name: "Contact",
      linkTo: "/contact",
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
              {links.map(({ name, linkTo }) => (
                <li
                  className={classes.Navigation_linkContainer}
                  key={`navigation-link-${linkTo}`}
                >
                  <a
                    href={`${linkTo}`}
                    className={classes.Navigation_link}
                    active={String(linkTo === location.pathname)}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className={classes.Navigation_groupContainer}>
            <ul className={classes.Navigation_group}>
              <li className={classes.Navigation_linkContainer}>
                <a
                  href="/login"
                  className={classes.Navigation_link}
                  active={String("/login" === location.pathname)}
                >
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
});

export default Navigation;
