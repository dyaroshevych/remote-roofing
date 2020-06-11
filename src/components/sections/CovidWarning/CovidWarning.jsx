import React, { useState } from "react";

import { Button } from "../../UI";

import classes from "./CovidWarning.module.scss";
import { exclamationMarkSvg, arrowDownSvg } from "../../../assets/img/icons";

const CovidWarning = () => {
  const [infoExpanded, setInfoExpanded] = useState(
    window.innerHeight >= 600 && window.innerWidth >= 600
  );

  const expandInfoHaldler = () => {
    setInfoExpanded(true);
  };

  return (
    <div className={classes.CovidWarning}>
      <div
        className={classes.CovidWarning_content}
        expanded={String(infoExpanded)}
      >
        <img
          className={classes.CovidWarning_icon}
          src={exclamationMarkSvg}
          alt="warning"
        />
        <h3>CoViD-19 Attention</h3>
        <p>
          <b>Remote Roofing</b> is doing it's part to help homeowners and
          businesses owners that have contracting needs.{" "}
          <b>
            We are suspending all fees related to remote roof inspections.
            Remote Roofing provides the safest solution to roof inspections and
            we believe that customers should not have to compromise their
            health!
          </b>{" "}
          For further information on our services and discounts, contact us at
          (214) 865-8818.
        </p>
      </div>
      {!infoExpanded && (
        <div className={classes.CovidWarning_buttonContainer}>
          <Button
            click={expandInfoHaldler}
            className={classes.CovidWarning_button}
          >
            <img
              className={classes.CovidWarning_buttonIcon}
              src={arrowDownSvg}
              alt="Expand"
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CovidWarning;
