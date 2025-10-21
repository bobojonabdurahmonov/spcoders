import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchPanel.css";

export default function SearchPanel() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKey = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search users or projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKey}
      />
    </div>
  );
}
