import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import nonuserlogo from "../assets/nonuser.png";

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/user/${id}/`);
        if (!res.ok) throw new Error("Failed to load profile");
        const data = await res.json();
        setUser(data.user);
        setProjects(data.projects);
        setAchievements(data.achievements || []);
      } catch (err) {
        console.error("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, [id]);

  if (loading) return <p style={{ color: "#fff", textAlign: "center" }}>Loading...</p>;
  if (!user) return <p style={{ color: "#fff", textAlign: "center" }}>User not found</p>;

  return (
    <div className="profile-container">
      {/* === HEADER === */}
      <div className="profile-header">
        <img
          className="profile-avatar"
          src={user.avatar ? `http://127.0.0.1:8000${user.avatar}` : nonuserlogo}
          alt="avatar"
        />
        <div className="profile-info">
          <h1 className="profile-name">{user.username}</h1>
          <p className="profile-bio">{user.bio || "No bio yet."}</p>
        </div>
      </div>

      {/* === PROJECTS === */}
      <div className="profile-section">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">User's public works</p>

        {projects.length === 0 ? (
          <p className="no-results">No projects found</p>
        ) : (
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.id} className="project-card">
                <h3>{p.name}</h3>
                <p className="project-desc">{p.description.slice(0, 100)}...</p>
                <div className="project-meta">
                  <span>📅 {new Date(p.date).toLocaleDateString()}</span>
                  <span>{p.progress}% complete</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* === ACHIEVEMENTS === */}
      <div className="profile-section" style={{ marginTop: "40px" }}>
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Milestones and recognitions</p>

        {achievements.length === 0 ? (
          <p className="no-results">No achievements yet</p>
        ) : (
          <div className="activity-cards">
            {achievements.map((a, i) => (
              <div key={i} className="activity-card">
                <h4>{a.title}</h4>
                <p style={{ color: "#8b949e" }}>{a.description}</p>
                <p style={{ fontSize: "13px", color: "#666" }}>🏅 {a.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

