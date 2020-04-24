import React from "react";

import classes from "./CovidWarning.module.scss";
import { exclamationMarkSvg } from "../../../assets/img/icons";

const CovidWarning = () => {
  return (
    <div className={classes.CovidWarning} id="covid-warning">
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
          We are suspending all fees related to remote roof inspections. Remote
          Roofing provides the safest solution to roof inspections and we
          believe that customers should not have to compromise their health!
        </b>{" "}
        For further information on our services and discounts, contact us at
        (682) 218-9336.
      </p>
    </div>
  );
};

export default CovidWarning;
