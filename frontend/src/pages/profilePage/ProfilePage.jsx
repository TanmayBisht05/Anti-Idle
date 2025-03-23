import React, { useState } from "react";
import "./ProfilePage.css";
import { FaCamera, FaCog, FaLinkedin, FaGithub, FaTwitter, FaEdit, FaSave } from "react-icons/fa";
import defaultProfilePic from "./assets/profilePic.jpg"; // Import default profile image
const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("Pampa");
  const [email, setEmail] = useState("pampa@gmail.com");
  const [bio, setBio] = useState("Write something about yourself...");
  const [isEditing, setIsEditing] = useState(false);
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  // Toggle Edit Mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container img">
      <div className="profile-card">
        {/* Profile Picture */}
        <div className="profile-pic">
          <img src={profilePic || defaultProfilePic} alt="Profile" />
          {isEditing && (
            <>
              <label htmlFor="fileInput">
                <FaCamera className="camera-icon" />
              </label>
              <input type="file" id="fileInput" accept="image/*" onChange={handleImageUpload} hidden />
            </>
          )}
        </div>

        {/* Editable Fields */}
        {isEditing ? (
          <>
            <input type="text" className="editable-input" style={{height:"5%",margin:"5% 0% 0% 0%"}} value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" className="editable-input" style={{height:"5%",margin:"5% 0% 0% 0%"}} value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea className="bio-input" value={bio} style={{height:"15%",margin:"5% 0% 7% 0%"}} onChange={(e) => setBio(e.target.value)} />
          </>
        ) : (
          <>
            <p style={{height:"5%",margin:"5% 0% 0% 0%",fontSize:"4vh"}}>{name}</p>
            <p style={{height:"5%",margin:"11% 0% 0% 0%",fontSize:"3vh"}}>{email}</p>
            <p className="bio" style={{height:"5%",margin:"2% 0% 10% 0%",fontSize:"3vh"}}>{bio}</p>
          </>
        )}

        {/* Social Links */}
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>

        {/* Edit/Save Button */}
        <button className="edit-btn" style={{margin:"10%",fontSize:"3vh",color:"#90EE90"}} onClick={handleEditToggle}>
          {isEditing ? <><FaSave /> Save</> : <><FaEdit /> Edit Profile</>}
        </button>
      </div>
    </div>
  );
};

export default Profile;
