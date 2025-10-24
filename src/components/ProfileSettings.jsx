import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function ProfileSettings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    username: "",
    email: "",
    biography: "",
    profilepic: null,
  });

  useEffect(() => {
    const storageuser = sessionStorage.getItem("user");
    if (storageuser) {
      try {
        const parsedUser = JSON.parse(storageuser);
        setUser(parsedUser);
        setForm({
          username: parsedUser.username || "",
          email: parsedUser.email || "",
          biography: parsedUser.biography || "",
          profilepic: null, 
        });
      } catch (e) {
        console.error("Failed to parse user:", e);
      }
    } else {
      console.log("User is not defined");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilepic") {
      setForm((prev) => ({ ...prev, profilepic: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("biography", form.biography);
    if (form.profilepic) {
      formData.append("profilepic", form.profilepic);
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/userupdate/", {
        method: "POST",
        credentials: "include",
        body: formData, // JSON emas, FormData
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server error: ${response.status}\n${text}`);
      }

      const data = await response.json();
      console.log("Update response:", data);

      if (data.status === "success") {
        sessionStorage.setItem("user", JSON.stringify(data.user || data));
        alert("Profile updated successfully!");
        navigate("/profile");
      } else {
        alert(data.message || "Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Network or server error");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Profile Settings</h1>
      <form className="settings-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea
            name="biography"
            placeholder="Tell something about yourself..."
            value={form.biography}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="file"
            name="profilepic"
            accept="image/*"
            onChange={handleChange}
          />
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
