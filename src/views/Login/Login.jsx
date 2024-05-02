import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import Navbar from '../../components/Navbar/Navbar';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  return (
    <>
    <div className="loginPage">
      <div className="loginContainer">
        <h1 className="pacifico-regular">SuperEats</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          <p className="signup" onClick={handleSignupClick}>
            Don't have an account? <strong>Sign Up</strong>
          </p>
          <p className="forgotPassword" onClick={handleForgotPasswordClick}>Forgot Password?</p>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
