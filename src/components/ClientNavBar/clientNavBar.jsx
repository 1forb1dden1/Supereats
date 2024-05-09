import React from 'react';
import { Link } from 'react-router-dom';
import './clientNavBar.css';

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
            </ul>
        </div>
    </nav>
    );
}

export default ClientNavBar;
