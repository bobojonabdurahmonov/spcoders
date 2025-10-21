import React, { useState } from "react";
import "./MainSettings.css";

function Settings({ onBack }) {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [sound, setSound] = useState(true);
  const [privacy, setPrivacy] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-wrapper">
      <div className="settings-header-row">
        <h2>Settings</h2>
      </div>

      <form onSubmit={handleSave} className="settings-form">
        <div className="setting-group">
          <label>Theme</label>
          <div className="setting-inline">
            <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>

        <div className="setting-group">
          <label>Notifications</label>
          <div className="setting-inline">
            <span>{notifications ? "Enabled" : "Disabled"}</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>
        </div>

        <div className="setting-group">
          <label>Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Uzbek</option>
            <option>Russian</option>
            <option>Turkish</option>
          </select>
        </div>

        <div className="setting-group">
          <label>Sound Effects</label>
          <div className="setting-inline">
            <span>{sound ? "On" : "Off"}</span>
            <input
              type="checkbox"
              checked={sound}
              onChange={() => setSound(!sound)}
            />
          </div>
        </div>

        <div className="setting-group">
          <label>Privacy</label>
          <div className="setting-inline">
            <span>{privacy ? "Show Online" : "Appear Offline"}</span>
            <input
              type="checkbox"
              checked={privacy}
              onChange={() => setPrivacy(!privacy)}
            />
          </div>
        </div>

        <div className="settings-actions">
          <button type="submit" className="save-btn">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
