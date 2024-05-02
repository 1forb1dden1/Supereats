import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import "./Login.css";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

onAuthStateChanged(auth, user => { // checks what user is logged in and prints out their email
	if(user != null) {
		console.log("Signed in as", user.email);
	}
});

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await doSignInWithEmailAndPassword(email,password);
    console.log("signed in");
    navigate("/");
  };

  

  const handleSignupClick = () => {
    // Navigate to the login page when the "Login" button is clicked
    navigate("/signup");
  };

  return (
    <div className="loginContainer">
      <div className="leftSide">
        {/* <div className="title">
          <h1 className="firstTitle">CU<br></br>NY</h1>
          <h1 className="secondTitle">
            <span className="text-wrapper-1">S</span>
            <span className="text-wrapper-2">p</span>
            <span className="text-wrapper-3">h</span>
            <span className="text-wrapper-4">e</span>
            <span className="text-wrapper-5">r</span>
            <span className="text-wrapper-6">e</span>
          </h1>
        </div> */}
        <img src="../logo.png" alt="Logo PlaceHolder"></img>
        <div className="noAccount">
            <p>Not a member?</p>
            <p className="signup" onClick={handleSignupClick} >Sign Up</p>
          </div>
      </div>
      <div className="rightSide">
        <h1>Welcome!</h1>
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
          <br></br>
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
        </form>
      </div>
    </div>
  );
}

export default Login;