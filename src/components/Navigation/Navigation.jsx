import React from "react";

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
      <ul className="wrapper navigation__list">
        <li>
          <Logo />
        </li>
        <li className="navigation__links-container">
          <ul className="navigation__links">
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
            <li>
              <Button size={"md"}>Free Inspection</Button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
