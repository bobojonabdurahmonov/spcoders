import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/projects/${id}/`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  if (!project) return <p style={{ color: "#fff", textAlign: "center" }}>Loading...</p>;

  const handleDownload = () => {
    const fileUrl = `http://localhost:8000${project.file}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = project.file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <h2>{project.name}</h2>
        <span
          className={`project-visibility ${
            project.visibility.toLowerCase() === "public" ? "public" : "private"
          }`}
        >
          {project.visibility}
        </span>
      </div>

      <p className="project-description">{project.description}</p>

      {project.file && (
        <div className="project-file-box">
          <div className="file-info">
            <span className="file-icon">📎</span>
            <span className="file-name">{project.file.split("/").pop()}</span>
          </div>
          <button className="download-btn" onClick={handleDownload}>
            ⬇ Download
          </button>
        </div>
      )}

      <div className="project-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <p className="progress-label">{project.progress}% completed</p>
      </div>

      <p className="project-date">📅 {new Date(project.date).toLocaleString()}</p>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}
