import React from "react";
import { classnames } from "../../utils/helper";

function Switch({
  label,
  value,
  name,
  defaultChecked,
  onChange,
  error,
  disabled,
  rounded
}) {
  return (
    <label
      className={classnames({
        "toggle-switch": true,
        "is-disabled": disabled
      })}
    >
      {label}
      <input
        onChange={onChange}
        type="checkbox"
        name={name}
        disabled={disabled}
        error={error}
        defaultChecked={defaultChecked}
      />
      <span
        className={classnames({
          "toggle-slider": true,
          round: rounded
        })}
      ></span>
    </label>
  );
}

export default Switch;
