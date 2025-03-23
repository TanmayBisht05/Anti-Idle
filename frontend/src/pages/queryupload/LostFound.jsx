import React from "react";
import "./LostFoundPage.css";

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Lost & Found Logo" />
          <span>I Found</span>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Lost</a></li>
          <li><a href="#">Report Lost</a></li>
          <li><a href="#">Found</a></li>
          <li><a href="#">Report Found</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
        <button className="signout-btn">Sign Out</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>
          Find & Recover <br /> <span className="highlight">With Ease</span>
        </h1>
        <p>Experience effortless recovery with our dedicated lost and found service.</p>
        <div className="buttons">
          <button className="lost-btn">Lost</button>
          <button className="found-btn">Found</button>
        </div>
        <div className="images">
          <img src="/laptop.jpg" alt="Laptop" />
          <img src="/lost-sign.jpg" alt="Lost Sign" />
          <img src="/watch.jpg" alt="Watch" />
        </div>
      </header>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h4>Site</h4>
          <p>Lost</p>
          <p>Report Lost</p>
          <p>Found</p>
          <p>Report Found</p>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <p>Customer Support</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>YouTube</p>
          <p>About Us</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Tel: +94 716520690</p>
          <p>Email: talkprojects@wronix.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
