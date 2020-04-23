import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { withRouter } from "react-router-dom";

import { Wrapper } from "../../../hoc";
import { Button, Logo } from "../../UI";
import { MobileNavigation, NavigationForm } from "./";

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

  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    const warningHeight = document.querySelector("#covid-warning").offsetHeight;

    window.onscroll = debounce(() => {
      if (window.scrollY < warningHeight) {
        setFixed(false);
      } else if (window.scrollY >= warningHeight) {
        setFixed(true);
      }
    }, 20);
  }, []);

  const [formVisible, setFormVisible] = useState(false);

  const toggleFormHandler = () => setFormVisible(!formVisible);

  return (
    <nav className={classes.Navigation} fixed={String(isFixed)}>
      <Wrapper>
        <ul className={classes.Navigation_list}>
          <li className={classes.Navigation_groupContainer}>
            <ul className={classes.Navigation_group}>
              <Logo />
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
              <Button size={"md"} click={toggleFormHandler}>
                Get Inspection
              </Button>
            </ul>
          </li>
        </ul>
        <NavigationForm
          visible={formVisible}
          toggleVisibility={toggleFormHandler}
        />
        <MobileNavigation
          links={[
            ...links,
            {
              name: "Log In",
              linkTo: "/login",
            },
          ]}
          {...{ location }}
        />
      </Wrapper>
    </nav>
  );
});

export default Navigation;
