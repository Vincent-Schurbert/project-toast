import React from "react";

function RadioButton({
  isChecked,
  onChange,
  name,
  label,
  value,
  id,
  ...delegated
}) {
  return (
    <>
      <input
        {...delegated}
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
}

export default RadioButton;
