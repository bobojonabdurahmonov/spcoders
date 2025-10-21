import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function ProfileSettings() {
  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/profile"); // 🔙 Profil sahifasiga qaytadi
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Profile Settings</h1>
      <form className="settings-form">
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" defaultValue="Bobojon" />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea
            placeholder="Tell something about yourself..."
            defaultValue="Building cool stuff with React + Django."
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" defaultValue="bobojon@example.com" />
        </div>

        <div className="form-group">
          <label>Avatar URL</label>
          <input type="text" placeholder="Paste avatar URL..." />
        </div>

        <div className="settings-actions">
          <button type="submit" className="save-btn">
            Save changes
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;
