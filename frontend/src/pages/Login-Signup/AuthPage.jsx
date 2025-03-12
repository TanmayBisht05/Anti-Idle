import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AuthPage.css";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = new URLSearchParams(location.search).get("redirect") || "/"; // Default to home

  const [isSignup, setIsSignup] = useState(false);
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Login successful!");
        navigate(redirectTo); // Redirect to original page
      } else {
        alert(`Login failed: ${data.error}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ full_name, username: email, password }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Registration successful!");
        navigate(redirectTo); // Redirect to original page after signup
      } else {
        alert(`Registration failed: ${data.error}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>

        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {isSignup && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}

        {isSignup ? (
          <button onClick={handleSignup}>Sign Up</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}

        <p onClick={toggleMode} className="toggle-text">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
