import React from "react";

import { Wrapper } from "../../../hoc";
import { Logo } from "../../UI/";

import classes from "./Footer.module.scss";
import {
  facebookSvg,
  linkedinSvg,
  youtubeSvg,
  instagramSvg,
} from "../../../assets/img/icons/social";

const Footer = () => {
  const links = [
    {
      title: "Services",
      items: [
        {
          name: "Residential Roofing",
          link: "/residential",
        },
        {
          name: "Commercial Roofing",
          link: "/commercial",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Log In",
          link: "/login",
        },
      ],
    },
  ];

  const social = [
    {
      name: "Facebook",
      icon: facebookSvg,
      link: "https://facebook.com",
    },
    { name: "LinkedIn", icon: linkedinSvg, link: "https://linkedin.com" },
    { name: "YouTube", icon: youtubeSvg, link: "https://youtube.com" },
    { name: "Instagram", icon: instagramSvg, link: "https://instagram.com" },
  ];

  return (
    <footer className={classes.Footer}>
      <Wrapper className={classes.Footer_container}>
        <div className={classes.Footer_item}>
          <Logo />
        </div>
        {links.map(({ title, items }) => (
          <div className={classes.Footer_item} key={title}>
            <h3>{title}</h3>
            <ul>
              {items.map(({ name, link }) => (
                <li key={link} className={classes.Footer_linkContainer}>
                  <a href={`/#${link}`}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={classes.Footer_item}>
          <ul className={classes.Footer_socialList}>
            {social.map(({ name, icon, link }) => (
              <li key={link} className={classes.Footer_socialItem}>
                <a href={`/#${link}`}>
                  <img
                    className={classes.Footer_socialItemIcon}
                    src={icon}
                    alt={name}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
