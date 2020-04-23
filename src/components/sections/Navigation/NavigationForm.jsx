import React from "react";

import { Modal, Form } from "../../UI";

const NavigationForm = ({ visible, toggleVisibility }) => {
  return (
    <Modal isVisible={visible} {...{ toggleVisibility }}>
      <Form
        submit="https://formspree.io/xaydgbjk"
        title="Get Inspection"
        fields={[
          {
            name: "address",
            placeholder: "Address",
            required: true,
            maxLength: 200,
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
  );
};

export default NavigationForm;
