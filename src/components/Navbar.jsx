import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import profile from './profile.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/"><img src={profile} alt="Profile" className="profile-pic" /></a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="account">
        <a href="/account">Account</a>
      </div>
    </nav>
  );
}

export default Navbar;
