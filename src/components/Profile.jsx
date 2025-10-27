import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Profile.css";
import nonuserlogo from "../assets/nonuser.png";

function Profile() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const [userpic, setUserpic] = useState('');
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      try {
        setUserpic(JSON.parse(storedUser));
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Failed to parse user data:", e);
      }
    }
  }, []);


  const handleLogout = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/logout/", {
          method: "POST",
          credentials: "include",
        });

        const data = await response.json();
        console.log("Logout response:", data);

        if (data.status === "success") {
          window.location.href = "/";
          sessionStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Logout error:", error);
      }
    };


  return (
    <div className="profile-container">
      {/* === HEADER === */}
      <div className="profile-header">
        <img
          className="profile-avatar"
          src={userpic && userpic.profilepic ? userpic.profilepic : nonuserlogo}
          alt="avatar"
        />
        <div className="profile-info">
          <h1 className="profile-name">{user?.username || "Guest"}</h1>
          <p className="profile-bio">{user?.biography || "Coder"}</p>
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
