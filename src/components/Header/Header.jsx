import React, { useRef, useEffect } from "react";

import { InspectionForm } from "../";
import { Wrapper } from "../../hoc";

import headerBgJpg from "../../assets/img/header-bg.jpg";
import classes from "./Header.module.scss";

const Header = () => {
  const inspectionFormInputRef = useRef(null);

  useEffect(() => {
    inspectionFormInputRef.current.focus();
  }, []);

  return (
    <header className={classes.Header}>
      <div
        className={classes.Header_background}
        style={{ backgroundImage: `url(${headerBgJpg})` }}
      ></div>
      <Wrapper>
        <div className={classes.Header_textContainer}>
          <div className={classes.Header_textContainerItem}>
            <h1>
              Any Roof,
              <br />
              Anywhere
            </h1>
          </div>
          <div className={classes.Header_textContainerItem}>
            <h3>
              Roof inspections in seconds using satellite imagery.
              <br />
              Let Remote Roofing help you.
            </h3>
            <InspectionForm
              source="header"
              forwardedRef={inspectionFormInputRef}
            />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
