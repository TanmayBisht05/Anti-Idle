import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Import the logo
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Lost & Found Logo" />  
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Lost</a>
          </li>
          <li>
            <a href="#">Report Lost</a>
          </li>
          <li>
            <a href="#">Found</a>
          </li>
          <li>
            <a href="#">Report Found</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
        <button className="signout-btn">Sign Out</button>
      </nav>
    </div>
  );
};

export default Navbar;
