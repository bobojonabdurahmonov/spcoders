import React, { useState } from "react";
import "./Auth.css";

export default function Auth({ type = "login" }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(type === "login" ? "Login data:" : "Register data:", form);
  };

  const registerUser = () => {
    fetch("http://localhost:8000/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  const logInUser = () => {
    fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username,
        password: form.password, 
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  const authUser = () => {
    if(type == "login") {
      logInUser()
    } else {
      registerUser()
    }
  }

  return (
    <div className="auth-container">
      <h2>{type === "login" ? "Welcome Back" : "Create an Account"}</h2>
      <p>
        {type === "login"
          ? "Login to your SpCode account"
          : "Join the SpCode community today"}
      </p>

      <form onSubmit={handleSubmit}>
        {type === "register" && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={() => authUser()}>
          {type === "login" ? "Login" : "Register"}
        </button>
      </form>

      <p className="switch-text">
        {type === "login" ? (
          <>
            Don’t have an account?{" "}
            <a href="/register">Register</a>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <a href="/login">Login</a>
          </>
        )}
      </p>
    </div>
  );
}
