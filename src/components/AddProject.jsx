import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./AddProject.css";

export default function AddProject() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tech, setTech] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, desc, tech, image });
    alert("✅ Project added successfully (demo)");
    navigate("/projects");
  };

  return (
    <motion.div
      className="add-project-page"
      initial={{ opacity: 0, y: 50 }}   // pastdan boshlanadi
      animate={{ opacity: 1, y: 0 }}   // tepaga chiqadi
      exit={{ opacity: 0, y: 50 }}     // chiqayotganda pastga tushadi
      transition={{ duration: 0.5, ease: "easeOut" }} // silliq o‘tish
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
          <label>Project Image</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        </div>

        <button type="submit" className="submit-btn">
          ➕ Add Project
        </button>
      </form>
    </motion.div>
  );
}
