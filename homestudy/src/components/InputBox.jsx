import React from "react";
import "./InputBox.css";

const InputBox = ({ label, placeholder, type = "text", value, error, onChange }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default InputBox;