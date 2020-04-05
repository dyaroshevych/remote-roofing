import React from "react";

import { Wrapper } from "../../hoc";
import { Button, Logo } from "../";

import "./Navigation.scss";

const Navigation = () => {
  const links = [
    {
      name: "Why Remote Roofing?",
      linkTo: "why-remote-roofing",
    },
    {
      name: "Residentual",
      linkTo: "residentual",
    },
    {
      name: "Commercial",
      linkTo: "commercial",
    },
    {
      name: "Storm Damage",
      linkTo: "storm-damage",
    },
  ];

  return (
    <nav className="navigation">
      <Wrapper>
        <ul className="navigation__list">
          <li className="navigation__group-container">
            <ul className="navigation__group">
              <li className="navigation__link-container">
                <Logo />
              </li>
              {links.map((link) => (
                <li
                  className="navigation__link-container"
                  key={`navigation-link-${link.linkTo}`}
                >
                  <a href={`./${link.linkTo}`} className="navigation__link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="navigation__group-container">
            <ul className="navigation__group">
              <li className="navigation__link-container">
                <a href="/" className="navigation__link">
                  Log In
                </a>
              </li>
              <li className="navigation__link-container">
                <Button size={"md"}>Free Inspection</Button>
              </li>
            </ul>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
};

export default Navigation;
