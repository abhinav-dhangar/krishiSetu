import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Dashboard from './components/Pages/Dashboard';
import OnlineMandi from './components/Pages/OnlineMandi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/online-mandi" element={<OnlineMandi />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
