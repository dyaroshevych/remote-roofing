import React from "react";

import { AddressInput } from "./";

import classes from "./Input.module.scss";

const Input = ({
  name,
  type = "text",
  defaultValue = "",
  placeholder = "",
  required = false,
  maxLength = 1000,
  readOnly = false,
  appearance = "inline",
}) => {
  const classNames = [classes.Input, classes[`Input___${appearance}`]].join(
    " "
  );

  const id = `field_${name}`;

  return name === "address" && readOnly === false ? (
    <AddressInput className={classNames} {...{ id, placeholder }} />
  ) : (
    <input
      className={classNames}
      {...{
        id,
        name,
        type,
        defaultValue,
        placeholder,
        required,
        maxLength,
        readOnly,
      }}
    />
  );
};

export default Input;
