import React from "react";
import "./HomePage.css";
// import { FaUser } from "react-icons/fa"; // Import the user icon

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="navbar-left">
          <h1>College Utility App</h1>
        </div>
        <div className="navbar-right">
          <a href="/profile" className="profile-link">
            <FaUser className="profile-icon" /> Profile
          </a>
        </div>
      </header>

      {/* Main Section */}
      <div className="main-section">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Services</h2>
          <ul>
            <li>Buy/Sell</li>
            <li>Lost &amp; Found</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h2>Lost and Found Queries</h2>
          <div className="query">
            <p>
              <strong>Query 1:</strong> Lost keys near the library.
            </p>
          </div>
          <div className="query">
            <p>
              <strong>Query 2:</strong> Missing wallet in the cafeteria.
            </p>
          </div>
          <div className="query">
            <p>
              <strong>Query 3:</strong> Found a phone near the gym.
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@collegeutilityapp.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h3>FAQ</h3>
          <ul>
            <li>
              <a href="/faq">How to use the app?</a>
            </li>
            <li>
              <a href="/faq">Account setup</a>
            </li>
            <li>
              <a href="/faq">Privacy policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
