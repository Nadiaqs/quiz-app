import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
import "./app.css";

const Register = ({ onRegister, onToggle }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, pass);
      console.log("User created:", userCred.user.uid);
      onRegister(userCred.user);
    } catch (err) {
      console.error("Register error:", err.message);
      setError("Could not register", err.message);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2>Register in Het Latin Lab</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="quiz-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="quiz-input"
        />
        <button className="quiz-button" onClick={handleRegister}>
          Create Account
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <button
        className="quiz-button link-button"
        onClick={onToggle}
        style={{ marginTop: "10px" }}
      >
        ¿Don't you have an account?Create account
      </button>
    </div>
  );
};
export default Register;
