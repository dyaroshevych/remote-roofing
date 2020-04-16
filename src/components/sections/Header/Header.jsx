import React, { useRef, useEffect } from "react";

import { InspectionForm } from "../../UI";
import { Wrapper } from "../../../hoc";

import { headerBgJpg } from "../../../assets/img";
import classes from "./Header.module.scss";

const Header = ({ title, subText = [] }) => {
  const inspectionFormInputRef = useRef(null);

  useEffect(() => {
    inspectionFormInputRef.current.focus();
  });

  return (
    <header className={classes.Header}>
      <div
        className={classes.Header_background}
        style={{ backgroundImage: `url(${headerBgJpg})` }}
      ></div>
      <Wrapper>
        <div className={classes.Header_textContainer}>
          <h1>{title}</h1>
          {subText.map((text, idx) => (
            <h3 key={idx}>{text}</h3>
          ))}
          <InspectionForm forwardedRef={inspectionFormInputRef} />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
