import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home/Home';
import Client from './views/ClientManagement/Client';
import ClientMenuItem from './views/ClientMenuItem/ClientMenuItem';
import NavBar from './components/Navbar/Navbar';
import AboutUs from './views/AboutUs/AboutUs'
import Cart from './views/Cart/Cart'
import ContactUs from './views/ContactUs/ContactUs'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'
import ForgotPassword from './views/ForgotPassword/ForgotPassword'
import { AuthProvider } from './contexts/authContext';

const App = () => {
  const location = useLocation();
  
  // Determine if NavBar should be shown
  const showNavBar = ['/login', '/signup', '/forgot-password', '/about-us', '/cart', '/contact-us' ].includes(location.pathname);

  return (
    <div>
      {showNavBar && <NavBar />}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/MenuItem" element={<ClientMenuItem />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />  
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
        
      </AuthProvider>
    </div>
  );
};

export default App;
