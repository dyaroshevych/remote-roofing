import React, { useRef, useEffect } from "react";

import { InspectionForm } from "../";
import { Wrapper } from "../../hoc";

import headerBgJpg from "../../assets/img/header-bg.jpg";
import "./Header.scss";

const Header = () => {
  const inspectionFormInputRef = useRef(null);

  useEffect(() => {
    inspectionFormInputRef.current.focus();
  }, []);

  return (
    <header className="header">
      <div
        className="header__background"
        style={{ backgroundImage: `url(${headerBgJpg})` }}
      ></div>
      <Wrapper>
        <div className="header__text-container">
          <div className="header__text-container-item">
            <h1 className="heading-primary">
              Any roof,
              <br />
              Anywhere
            </h1>
          </div>
          <div className="header__text-container-item">
            <h3 className="heading-tertiary">
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
