import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './clientNavBar.css';
import { doSignOut } from '../../../firebase/auth'; // Import doSignOut function

function ClientNavBar() {
    return (
    <nav className="custom-navbar">
        <div className="navbar-container">
            <ul className="navbar-items">
                <li className="nav-item">
                <Link to="/admin" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/clientManagement" className="nav-link">Create Menu Item</Link>
                </li>
                <li className="nav-item">
                    <Link to="/MenuItem" className="nav-link">Edit Menu Item</Link>
                </li>
                <li className="nav-item">
                    <Link to="/manage-employee" className="nav-link">Manage Employees</Link>
                </li>
                <li>
                <Link to="/login"><button onClick={() => doSignOut()}>Logout</button></Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default ClientNavBar;
