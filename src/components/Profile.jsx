import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Profile.css";
import nonuserlogo from "../assets/nonuser.png";

function Profile() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <div className="profile-container">
      {/* === HEADER === */}
      <div className="profile-header">
        <img
          className="profile-avatar"
          src={nonuserlogo}
          alt="avatar"
        />
        <div className="profile-info">
          <h1 className="profile-name">Bobojon</h1>
          <p className="profile-bio">Full Stack Developer • React + Django</p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* === NAVIGATION === */}
      <div className="profile-nav">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => {
            setActiveTab("overview")
            navigate("/profile/overview")
          }}
        >
          Overview
        </button>
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => {
            setActiveTab("projects")
            navigate("/profile/projects")
          }}
        >
          Projects
        </button>
        <button
          className={activeTab === "settings" ? "active" : ""}
          onClick={() => {
            setActiveTab("settings");
            navigate("/profile/settings");
          }}
        >
          Settings
        </button>
      </div>

      {/* === CONTENT === */}
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
