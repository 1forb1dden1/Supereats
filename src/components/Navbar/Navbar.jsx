import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../../../firebase/auth'; // Import doSignOut function
import { auth } from '../../../firebase/firebase';
import '../Navbar/Navbar.css';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe()
  }, []);

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
            {!isLoggedIn && <Link to="/login">Login</Link>}
            {isLoggedIn && (<Link to="/"><button onClick={() => {doSignOut().then(() => {{navigate('/login')}});}}>Logout</button></Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;