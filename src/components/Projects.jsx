import React, { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  const addProject = () => {
    if (form.title && form.description) {
      setProjects([...projects, form]);
      setForm({ title: "", description: "" });
    }
  };

  return (
    <div className="page projects">
      <h2>Share Your Project</h2>
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
      ></textarea>
      <button onClick={addProject}>Add Project</button>

      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
