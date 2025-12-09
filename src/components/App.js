import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <div className="page">
              <h1>Welcome to my website!</h1>
            </div>
          } />
          
          <Route path="/about" element={
            <div className="page">
              <h1>This is a sample React Router program.</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
