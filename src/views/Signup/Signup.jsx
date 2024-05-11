import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { useAuth } from "../../contexts/authContext";
import { createUser } from "../../../firebase/auth";
import "./Signup.css";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                await createUser(email, password);
                navigate("/");
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
            }     
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    return (
        <div className="signupPage">
            <div className="signupContainer">
                <h1>SUPEREATS</h1>
                { "" !== notice &&
                    <div className = "alert alert-warning" role = "alert">
                        { notice }    
                    </div>
                }
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Username</label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    
                    <label htmlFor="password-confirm">Confirm Password</label>
                    <input
                        name="password-confirm"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-type Password"
                        required
                    />
                    {
                    /*
                    <label htmlFor="user">Choose User</label>
                    <select
                        name="college"
                        value={userDetails.college}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Store</option>
                        <option value="">Customer</option>
                        <option value="">Surfer</option>
                    </select>
                    */
                    }
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;