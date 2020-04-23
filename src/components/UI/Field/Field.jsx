import React from "react";

import { FieldContainer, Label, Input, Textarea } from "./";

const Field = ({
  name,
  type = "text",
  defaultValue = "",
  placeholder = "",
  required = false,
  maxLength = 1000,
  readOnly = false,
  appearance = "inline",
  className,
}) => (
  <FieldContainer {...{ className }}>
    <Label {...{ appearance, name }}>{placeholder}:</Label>
    {type === "textarea" ? (
      <Textarea
        {...{
          appearance,
          name,
          defaultValue,
          placeholder,
          maxLength,
        }}
      />
    ) : (
      <Input
        {...{
          name,
          type,
          defaultValue,
          placeholder,
          required,
          maxLength,
          readOnly,
          appearance,
        }}
      />
    )}
  </FieldContainer>
);

export default Field;
