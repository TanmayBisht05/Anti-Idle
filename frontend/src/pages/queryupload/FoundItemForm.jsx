import React, { useState } from "react";
import "./FoundItemForm.css";

const FoundItemForm = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ category, description, location, date });
  };

  return (
    <div>
      <div className="found-item-form-container">
        <h2>Report a Found Item</h2>
        <form onSubmit={handleSubmit} className="found-item-form">
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Documents">Documents</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            <option value="Others">Others</option>
          </select>

          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the found item..."
          ></textarea>

          <label>Last Seen Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where did you find it?"
          />

          <label>Date Found:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FoundItemForm;
