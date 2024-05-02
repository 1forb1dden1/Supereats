import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../ForgotPassword/ForgotPassword.css'

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [resetRequested, setResetRequested] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setResetRequested(true); 
    }, 2000); 
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="forgotPasswordPage">
      <div className="forgotPasswordContainer">
        <h1>Forgot Password?</h1>
        {!resetRequested ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
        ) : (
          <div>
            <p>Reset password link sent to your email.</p>
            <button onClick={handleLoginClick}>Back to Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;