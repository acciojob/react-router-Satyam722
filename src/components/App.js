import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';

// Home Component
const Home = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div>
      <h1>This is a sample React Router program.</h1>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
