import React from "react";

import { logoSvg } from "../../../assets/img";
import classes from "./Logo.module.scss";

const Logo = () => (
  <a href="#/">
    <img src={logoSvg} alt="Remote Roofing" className={classes.Logo} />
  </a>
);

export default Logo;
