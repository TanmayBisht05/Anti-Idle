import React from "react";
import "./Footer.css";

const Footer = ({ heroExpanded }) => {
  return (
    <div>
      <footer className={`footer ${heroExpanded ? "shift-down" : ""}`}>
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
};

export default Footer;
