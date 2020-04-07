import React from "react";

import logoPng from "../../assets/img/logo.png";
import classes from "./Logo.module.scss";

const Logo = () => (
  <img src={logoPng} alt="Remote Roofing" className={classes.Logo} />
);

export default Logo;
