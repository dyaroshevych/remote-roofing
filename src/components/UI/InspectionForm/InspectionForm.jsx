import React, { useState } from "react";
import AlgoliaPlaces from "algolia-places-react";

import { Button, Modal, ContactForm } from "../";

import classes from "./InspectionForm.module.scss";

const InspectionForm = ({ forwardedRef }) => {
  const [formInfo, setFormInfo] = useState({ address: "", isVisible: false });

  const changeAddressHandler = (address) => {
    const info = { ...formInfo };
    info.address = address;
    if (address.length > 0) {
      info.isVisible = true;
    }

    setFormInfo(info);
  };

  const changeVisibilityHandler = () => {
    if (formInfo.address !== "" || formInfo.isVisible) {
      const info = { ...formInfo };
      info.isVisible = !info.isVisible;

      setFormInfo(info);
    } else if (forwardedRef) {
      forwardedRef.current.focus();
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
          onClear={() => changeAddressHandler("")}
        />
        <Button
          size="lg"
          click={(e) => {
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
        <ContactForm
          submit="https://formspree.io/xaydgbjk"
          title="Get Inspection"
          fields={[
            {
              name: "address",
              defaultValue: formInfo.address,
              placeholder: "Address",
              required: true,
              maxLength: 200,
              readOnly: true,
            },
            {
              name: "name",
              placeholder: "Name",
              required: true,
              maxLength: 60,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email",
              required: true,
              maxLength: 100,
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone number",
              required: true,
              maxLength: 30,
            },
            {
              name: "notes",
              type: "textarea",
              placeholder: "Notes (optional)",
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default InspectionForm;
