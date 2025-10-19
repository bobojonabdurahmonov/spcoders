import React, { useState } from "react";
import Inbox from "./Chats";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import ProjectsBlock from "./ProjectsHome";

export default function Entry() {
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <>
            <Dashboard />
          </>
        );

      case "projects":
        return (
          <div className="projects-page">
            <ProjectsBlock />
          </div>
        );

      case "chat":
        return (
          <div className="chat-page">
            <Inbox />
          </div>
        );

      case "settings":
        return (
          <div className="settings-page">
            <Settings />
          </div>
        );

      case "achievements":
        return (
          <div className="achievements-page">
            <h1>🏆 Achievements</h1>
            <p>Track your progress and ranks.</p>
          </div>
        );

      default:
        return <h1>Welcome!</h1>;
    }
  };

  return (
    <div className="page entry">
      <div className="dashboard-grid">
        {/* ✅ Chap paneldagi tugmalar */}
        <aside className="left-rail">
          <button className="icon-btn" onClick={() => handleNavClick("home")}>💼</button>
          <button className="icon-btn" onClick={() => handleNavClick("projects")}>📁</button>
          <button className="icon-btn" onClick={() => handleNavClick("chat")}>💬</button>
          <button className="icon-btn" onClick={() => handleNavClick("settings")}>⚙</button>
          <button className="icon-btn" onClick={() => handleNavClick("achievements")}>🏆</button>
          <div className="add-floating">+</div>
        </aside>

        {/* ✅ O‘ngdagi asosiy kontent */}
        <main className="dashboard-main">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
