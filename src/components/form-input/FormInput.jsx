import React from "react";

import "./FormInput.style.scss";

const FormInput = ({ handleSomeChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleSomeChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;