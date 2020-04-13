import React, { useState } from "react";
import AlgoliaPlaces from "algolia-places-react";

import { Button, Modal, ContactForm } from "../";

import classes from "./InspectionForm.module.scss";

const InspectionForm = ({ forwardedRef = null }) => {
  const [formInfo, setFormInfo] = useState({ address: "", isVisible: false });

  const changeAddressHandler = (address) => {
    const info = { ...formInfo };
    info.address = address;
    info.isVisible = true;

    setFormInfo(info);
  };

  const changeVisibilityHandler = () => {
    if (formInfo.address !== "" || formInfo.isVisible) {
      const info = { ...formInfo };
      info.isVisible = !info.isVisible;

      setFormInfo(info);
    }
  };

  return (
    <>
      <form className={classes.InspectionForm} action="/" method="POST">
        <label
          htmlFor={`inspection-form`}
          className={classes.InspectionForm_label}
          ref={forwardedRef}
        >
          Enter your address to start!
        </label>
        <AlgoliaPlaces
          className={classes.InspectionForm_input}
          id={`inspection-form`}
          placeholder="Enter your address to start!"
          options={{
            appId: "pl0FDSAOXLGH",
            apiKey: "6f6e1961877c7ac0d0573e26d3a66e42",
            language: "en",
            countries: ["us"],
            type: "address",
          }}
          onChange={({ suggestion }) => changeAddressHandler(suggestion.value)}
        />
        <Button
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            changeVisibilityHandler();
          }}
        >
          Get Inspection
        </Button>
      </form>
      <Modal
        isVisible={formInfo.isVisible}
        changeVisibility={changeVisibilityHandler}
      >
        <ContactForm address={formInfo.address} />
      </Modal>
    </>
  );
};

export default InspectionForm;
