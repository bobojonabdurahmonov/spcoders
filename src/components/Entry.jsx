import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Entry() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="page entry">
      <div className="dashboard-grid">
        {/* ✅ Chap panel (yon navigatsiya) */}
        <aside className={`left-rail ${menuOpen ? "open" : ""}`}>
          <button className="icon-btn" onClick={() => navigate("/dashboard")}>💼</button>
          <button className="icon-btn" onClick={() => navigate("/projects")}>📁</button>
          <button className="icon-btn" onClick={() => navigate("/chats")}>💬</button>
          <button className="icon-btn" onClick={() => navigate("/settings")}>⚙</button>
          <button className="icon-btn" onClick={() => navigate("/achievements")}>🏆</button>
          <div className="add-floating">+</div>
        </aside>

        {/* 🔥 Mobil uchun hamburger menyu */}
        <div className="entry-hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? "bar active" : "bar"}></div>
          <div className={menuOpen ? "bar active" : "bar"}></div>
          <div className={menuOpen ? "bar active" : "bar"}></div>
        </div>

        {/* ✅ O‘ng tomondagi kontent joyi */}
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
