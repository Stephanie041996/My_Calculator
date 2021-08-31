import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <div className="title">
      <h1>Math Magicians</h1>
    </div>
    <div className="link">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/qoute">Qoute</Link>
    </div>
  </div>

);
export default NavBar;
