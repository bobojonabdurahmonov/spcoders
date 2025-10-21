import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./SearchPanel.css";

export default function SearchPage() {
  const [params] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");
  const [results, setResults] = useState({ users: [], projects: [] });
  const query = params.get("q");

  useEffect(() => {
    if (query) {
      (async () => {
        try {
          const res = await fetch(`http://127.0.0.1:8000/search?q=${query}`);
          const data = await res.json();
          setResults(data);
        } catch (err) {
          console.error("Search error:", err);
        }
      })();
    }
  }, [query]);

  const filtered =
    activeTab === "users"
      ? results.users
      : activeTab === "projects"
      ? results.projects
      : [...results.users, ...results.projects];

  return (
    <div className="page search-page">
      <h2>Results for: <span style={{ color: "#00bfff" }}>{query}</span></h2>

      <div className="search-tabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={activeTab === "users" ? "active" : ""}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
      </div>

      <div className="results-list">
        {filtered.length === 0 ? (
          <p className="no-results">No results found</p>
        ) : (
          filtered.map((item, i) => (
            <div key={i} className="result-card">
              {item.username ? (
                <>
                  <div className="result-icon">👤</div>
                  <Link to={`/user/:id`} className="search-user-card">
                    <img src={user.avatar} alt="avatar" />
                    <div>{user.username}</div>
                    </Link>
                </>
              ) : (
                <>
                  <div className="result-icon">💻</div>
                  <div>
                    <div className="result-title">{item.title}</div>
                    <div className="result-sub">Project</div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
