import React, { useState } from "react";
import "./Auth.css";

export default function Auth({ type = "login", onSuccess }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log("Register response:", data);

        if (data.status === "success") {
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              username: form.username,
              email: form.email,
            })
          );
          // ✅ loader uchun username yuboramiz
          onSuccess(form.username);
        } else {
          alert(data.message || "Registration failed");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error:", err);
      });
  };

  const logInUser = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log("Login response:", data);

        if (data.status === "success") {
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              username: data.username,
              email: data.email,
              profilepic: data.profile_pic,
              biography: data.biography,
            })
          );
          // ✅ loader uchun username yuboramiz
          onSuccess(data.username);
        } else {
          alert(data.message || "Invalid credentials");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error:", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "login") logInUser();
    else registerUser();
  };

  return (
    <div className="auth-container">
      <h2>{type === "login" ? "Welcome Back" : "Create an Account"}</h2>
      <p>
        {type === "login"
          ? "Login to your SpCode account"
          : "Join the SpCode community today"}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        {type === "register" && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading
            ? "Please wait..."
            : type === "login"
            ? "Login"
            : "Register"}
        </button>
      </form>

      <p className="switch-text">
        {type === "login" ? (
          <>
            Don’t have an account?{" "}
            <span
              className="switch-link"
              onClick={() => window.location.reload()}
            >
              Register
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span
              className="switch-link"
              onClick={() => window.location.reload()}
            >
              Login
            </span>
          </>
        )}
      </p>
    </div>
  );
}
