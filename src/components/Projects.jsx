import React, { useState, useEffect } from "react";

function ProjectCard({ p }) {
  return (
    <div className="project-card">
      <div className="project-card-left">
        <div className="project-avatar">{p.title?.[0] || "P"}</div>
      </div>
      <div className="project-card-body">
        <h3>{p.title}</h3>
        <p>{p.description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("spcoders_projects")) || [];
    } catch {
      return [];
    }
  });
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    localStorage.setItem("spcoders_projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    if (form.title.trim() && form.description.trim()) {
      setProjects([{ ...form, created: Date.now() }, ...projects]);
      setForm({ title: "", description: "" });
    }
  };

  return (
    <div className="page projects">
      <div className="projects-header">
        <h2>Share Your Project</h2>
        <p className="muted">Showcase your repo, demo link and short description.</p>
      </div>

      <div className="project-form">
        <input
          type="text"
          placeholder="Project title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Project description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <div className="form-actions">
          <button className="btn" onClick={addProject}>Add Project</button>
        </div>
      </div>

      <div className="project-list">
        {projects.length === 0 ? (
          <div className="empty">No projects yet — be the first to add!</div>
        ) : (
          projects.map((p, i) => <ProjectCard key={i} p={p} />)
        )}
      </div>
    </div>
  );
}
