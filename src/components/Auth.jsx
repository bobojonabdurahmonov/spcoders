import React, { useState } from "react";
import "./Auth.css";

export default function Auth({ type = "login", onSuccess }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    const formData = new FormData();
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("password", form.password);
    if (form.profile_pic) formData.append("profile_pic", form.profile_pic);

    fetch("http://localhost:8000/register/", {
      method: "POST",
      body: formData, 
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          sessionStorage.setItem("user", JSON.stringify({
            username: data.username,
            email: data.email,
            profile_pic: data.profile_pic
          }));
          window.location.href = "/";
        } else {
          alert(data.message);
        }
      });
  };


  const logInUser = () => {
    fetch("http://127.0.0.1:8000/login/", {
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
        console.log(data);
        if (data.status === "success") {
          sessionStorage.setItem("user", JSON.stringify({
            username: form.username,
            email: form.email
          }));
          
          onSuccess(); 
        } else {
          alert(data.message);
        }
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

        <button type="submit">
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
