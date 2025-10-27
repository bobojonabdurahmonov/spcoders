import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectsHome.css";

export default function Loyihalar() {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/projects/", {
          credentials: "include", 
        });
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        } else {
          console.error("Failed to fetch projects");
        }
      } catch (e) {
        console.error("Error fetching projects:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (projects.length === 0) return <div>You don't have projects right now!</div>;

  return (
    <div className="loyihalar-sahifa">
      <h2>📁 Your Projects</h2>
      <div className="loyihalar-tarmoq">
        {projects.map((p) => (
          <div
            className="loyiha-karta"
            key={p.id}
            onClick={() => navigate(`/projects/${p.id}`)}
          >
            <div className="loyiha-bosh">
              <h3>{p.name}</h3>
              <span
                className={`holat ${
                  p.visibility === "public" ? "ochiq" : "yopiq"
                }`}
              >
                {p.visibility === "public" ? "Ochiq" : "Yopiq"}
              </span>
            </div>
            <p className="loyiha-tavsif">{p.description}</p>
            <div className="loyiha-past">
              <div className="jarayon">
                <div
                  className="jarayon-bar"
                  style={{ width: `${p.progress}%` }}
                ></div>
              </div>
              <div className="loyiha-malumot">
                <span>{p.progress}% completed</span>
                <span className="sana">{new Date(p.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
