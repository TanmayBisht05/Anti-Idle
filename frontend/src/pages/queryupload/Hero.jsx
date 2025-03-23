import React, { useState } from "react";
import "./Hero.css";
import LostItemForm from "./LostItemForm";
import FoundItemForm from "./FoundItemForm";
const Hero = ({ showLostForm, setShowLostForm, showFoundForm, setShowFoundForm, heroExpanded }) => {
  
  const handleLostClick = () => {
    setShowLostForm((prev) => !prev);  // Toggle Lost form
    setShowFoundForm(false);  // Close Found form when Lost is clicked
  };

  const handleFoundClick = () => {
    setShowFoundForm((prev) => !prev);  // Toggle Found form
    setShowLostForm(false);  // Close Lost form when Found is clicked
  };

  return (
    <header className={`hero ${heroExpanded ? "expanded" : ""}`}>
      <h1 className="chut">
        Find & Recover <br /> <span className="highlight">With Ease</span>
      </h1>
      <p>Experience effortless recovery with our dedicated lost and found service.</p>
      <div className="buttons">
        <button className={`lost-btn ${showLostForm ? "active" : ""}`} onClick={handleLostClick}>
          Lost
        </button>
        <button className={`found-btn ${showFoundForm ? "active" : ""}`} onClick={handleFoundClick}>
          Found
        </button>
      </div>
      {showLostForm && <LostItemForm />}
      {showFoundForm && <FoundItemForm />}
    </header>
  );
};

export default Hero;
