import React, { useState } from "react";
import InputBox from "./components/InputBox.jsx";
import SignupButton from "./components/SignupButton.jsx";
import CheckboxInput from "./components/CheckBoxInput.jsx";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Divider } from "@mui/material";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Simple validation
    if (name === "fullName") {
      setErrors({
        ...errors,
        fullName: value.trim() === "" ? "Name is required." : ""
      });
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: !emailRegex.test(value) ? "Please enter a valid email address." : ""
      });
    } else if (name === "password") {
      setErrors({
        ...errors,
        password: value.length < 6 ? "Password must be at least 6 characters long." : ""
      });
    }
  };

  return (
    <div className="auth-box">
      <div className="sitemark-logo">
        <span style={{ color: '#416BEA' }}>✱</span> Sitemark
      </div>
      <h1 className="signup-title">Sign up</h1>
      
      <InputBox 
        label="Full name" 
        placeholder="Jon Snow" 
        value={formData.fullName}
        error={errors.fullName}
        onChange={(value) => handleInputChange("fullName", value)}
      />
      
      <InputBox 
        label="Email" 
        placeholder="your@email.com" 
        value={formData.email}
        error={errors.email}
        onChange={(value) => handleInputChange("email", value)}
      />
      
      <InputBox 
        label="Password" 
        placeholder="••••••" 
        type="password"
        value={formData.password}
        error={errors.password}
        onChange={(value) => handleInputChange("password", value)}
      />
      
      <CheckboxInput 
        checked={receiveUpdates}
        onChange={(e) => setReceiveUpdates(e.target.checked)}
        label="I want to receive updates via email."
      />
      
      <SignupButton primary text="Sign up" />
      <br></br>
      <Divider sx={{ width: "100%" }}>or</Divider>
      <br></br>
      <SignupButton 
        icon={<GoogleIcon />}
        text="Sign up with Google"
        variant="oauth"
      />
      
      <SignupButton 
        icon={<FacebookIcon style={{ color: "#1877F2" }} />}
        text="Sign up with Facebook"
        variant="oauth"
      />
      
      <p className="signin-prompt">
        Already have an account? <a href="#" className="signin-link">Sign in</a>
      </p>
    </div>
  );
};

export default App;