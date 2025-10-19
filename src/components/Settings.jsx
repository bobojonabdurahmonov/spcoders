import React, { useState } from "react";
import "./Settings.css";

export default function Settings() {
  const [editField, setEditField] = useState(null);
  const [username, setUsername] = useState("Bobojon");
  const [email, setEmail] = useState("bobojon@example.com");
  const [isPublic , setIsPublic] = useState(true);


  const handleSave = () => {
    setEditField(null);
    alert("✅ Changes saved!");
  };

  return (
    <div className="settings-inline">
      <h2>⚙ Settings</h2>

      {/* Username */}
      <div className="setting-item">
        <div
          className="setting-label"
          onClick={() => setEditField(editField === "username" ? null : "username")}
        >
          <strong>Username:</strong> <span>{username}</span>
        </div>

        {editField === "username" && (
          <div className="edit-area">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter new username"
            />
            <button onClick={handleSave}>Save</button>
          </div>
        )}
      </div>

      {/* Email */}
      <div className="setting-item">
        <div
          className="setting-label"
          onClick={() => setEditField(editField === "email" ? null : "email")}
        >
          <strong>Email:</strong> <span>{email}</span>
        </div>

        {editField === "email" && (
          <div className="edit-area">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter new email"
            />
            <button onClick={handleSave}>Save</button>
          </div>
        )}
      </div>

      {/* Password */}
      <div className="setting-item">
        <div
          className="setting-label"
          onClick={() => setEditField(editField === "password" ? null : "password")}
        >
          <strong>Password:</strong> <span>********</span>
        </div>

        {editField === "password" && (
          <div className="edit-area">
            <input
              type="password"
              placeholder="Enter new password"
            />
            <button onClick={handleSave}>Save</button>
          </div>
        )}
      </div>

      <div className="setting-item">
        <div
            className="setting-label"
            onClick={() =>
            setEditField(editField === "project" ? null : "project")
            }
        >
            <strong>Showing Projects:</strong>{" "}
            <span className="status-text">{isPublic ? "Public" : "Private"}</span>
        </div>

        {editField === "project" && (
            <div className="toggle-area">
            <button
                className={isPublic ? "active" : ""}
                onClick={() => setIsPublic(true)}
            >
                Public
            </button>
            <button
                className={!isPublic ? "active" : ""}
                onClick={() => setIsPublic(false)}
            >
                Private
            </button>
            </div>
        )}
        </div>
    </div>
  );
}

