import React, { useState } from "react";

import { Modal } from "../../../UI";

import classes from "./MobileNavigation.module.scss";
import { menuSvg } from "../../../../assets/img/icons";

const MobileNavigation = ({ links, location }) => {
  const [navigationVisible, setNavigationVisible] = useState(false);

  const toggleNavigationHandler = () =>
    setNavigationVisible(!navigationVisible);

  return (
    <div className={classes.MobileNavigation}>
      <button
        className={classes.MobileNavigation_toggleButton}
        onClick={toggleNavigationHandler}
      >
        <img src={menuSvg} alt="toggle menu" />
      </button>
      <Modal
        isVisible={navigationVisible}
        changeVisibility={toggleNavigationHandler}
      >
        <h2>Navigation</h2>
        <ul className={classes.MobileNavigation_links}>
          {links.map(({ name, linkTo }) => (
            <li
              className={classes.MobileNavigation_linkContainer}
              key={`mobile-navigation-link-${linkTo}`}
            >
              <a
                onClick={toggleNavigationHandler}
                href={`${linkTo}`}
                className={classes.MobileNavigation_link}
                active={String(linkTo === location.pathname)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default MobileNavigation;
