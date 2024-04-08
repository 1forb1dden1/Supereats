import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
};

export default App