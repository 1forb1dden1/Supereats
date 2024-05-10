import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission of the form
        console.log("Signing up with these details:", userDetails);
    };

    return (
        <div className="signupPage">
            <div className="signupContainer">
                <h1>SUPEREATS</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Username</label>
                    <input
                        name="email"
                        type="email"
                        value={userDetails.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={userDetails.password}
                        onChange={handleChange}
                        placeholder="Password"
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