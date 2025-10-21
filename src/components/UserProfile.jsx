// components/UserProfile.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/UserProfile.css";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div className="loading">Loading...</div>;
  if (user.error) return <div className="error">{user.error}</div>;

  return (
    <div className="user-profile-page">
      <div className="profile-header">
        <img src={user.avatar} alt="avatar" className="profile-avatar" />
        <div>
          <h2>{user.username}</h2>
          <p className="bio">{user.bio}</p>
        </div>
      </div>

      <div className="user-projects">
        <h3>Projects</h3>
        <ul>
          {user.projects.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
