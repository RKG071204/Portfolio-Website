import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import userImage from '../assets/0.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={userImage} alt="User" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="/skills">SKILLS</Link>
        </li>
        <li>
          <Link to="/contacts">CONTACTS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
