import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="../src/img/logo.png" alt="SuperEats Logo" />
          </Link>
        </div>
        <ul className="nav-links">
        <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
