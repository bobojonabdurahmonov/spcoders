import React from "react";
import "./Profile.css";

function ProjectsProfile() {
  const projects = [
    {
      name: "LodoCoin WebApp",
      desc: "Telegram mini-app where users earn coins & ranks 🪙",
      lang: "JavaScript + FastAPI",
      stars: 42,
    },
    {
      name: "SpCoders Platform",
      desc: "Full-stack chatting & project sharing app 💬",
      lang: "React + Django",
      stars: 58,
    },
    {
      name: "Portfolio Site",
      desc: "Clean responsive portfolio website ✨",
      lang: "React",
      stars: 23,
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">Your Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-meta">
              <span>{p.lang}</span>
              <span>⭐ {p.stars}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsProfile;
