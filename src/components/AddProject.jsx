import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./AddProject.css";

export default function AddProject() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tech, setTech] = useState("");
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [isPublic, setIsPublic] = useState(true); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", title);
    formData.append("description", desc);
    formData.append("technologies", tech);
    formData.append("progress", progress);
    formData.append("visibility", isPublic ? "public" : "private");
    formData.append("user", user)
    if (file) formData.append("image", file);

    try {
      const res = await fetch("http://localhost:8000/api/projects/create/", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("✅ Project added successfully!");
        navigate("/projects");
      } else {
        const err = await res.text();
        setError("❌ Failed to add project: " + err);
      }
    } catch (e) {
      setError("❌ Server error: " + e.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const userObj = JSON.parse(sessionStorage.getItem("user"));
    setUser(userObj?.id);
  }, []);


  return (
    <motion.div
      className="add-project-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1>Add New Project</h1>

      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Title</label>
          <input
            type="text"
            placeholder="Enter project name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Describe your project..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Technologies</label>
          <input
            type="text"
            placeholder="e.g. React, Django, SQLite"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Completion (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />
        </div>

        {/* ✅ Visibility toggle */}
        <div className="form-group toggle-group">
          <label>Visibility</label>
          <div
            className={`toggle-switch ${isPublic ? "public" : "private"}`}
            onClick={() => setIsPublic(!isPublic)}
          >
            <div className="toggle-thumb"></div>
            <span>{isPublic ? "🌍 Public" : "🔒 Private"}</span>
          </div>
        </div>

        <div className="form-group">
          <label>Project File (optional)</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Uploading..." : "➕ Add Project"}
        </button>
      </form>
    </motion.div>
  );
}
