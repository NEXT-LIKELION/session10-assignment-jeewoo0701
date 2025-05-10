import React from "react";
import "./CheckBoxInput.css";

const CheckBoxInput = ({ checked, onChange, label }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="updates-checkbox"
      />
      <label htmlFor="updates-checkbox" className="checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInput;