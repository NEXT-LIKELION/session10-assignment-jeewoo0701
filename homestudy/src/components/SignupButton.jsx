import React from "react";
import "./SignupButton.css";

const SignupButton = ({ primary, icon, text, variant }) => {
  const buttonClass = primary ? "primary-button" : "oauth-button";
  
  return (
    <div className="button-container">
      <button className={buttonClass}>
        {icon && <span className="oauth-icon">{icon}</span>}
        {text}
      </button>
    </div>
  );
};

export default SignupButton;