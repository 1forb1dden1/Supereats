import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Signup from './views/SignUp/Signup';
import Client from './views/ClientManagement/Client'
import ClientMenuItem from './views/ClientMenuItem/ClientMenuItem';
import { AuthProvider } from './contexts/authContext';

const App = () => {
  return (
    <div>
      <AuthProvider>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Client" element={<Client/>}/>
        <Route path="/MenuItem" element={<ClientMenuItem/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </AuthProvider>
    </div>
  );
};

export default App