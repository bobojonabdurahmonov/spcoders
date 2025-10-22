import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import Projects from "./components/Projects";
import Community from "./components/Community";
import Profile from "./components/Profile";
import Inbox from "./components/Chats";
import Dashboard from "./components/Dashboard";
import ProjectsBlock from "./components/ProjectsHome";
import Settings from "./components/Settings";
import "./App.css";
import ProfileSettings from "./components/ProfileSettings";
import Achievements from "./components/Achievements";
import Overview from "./components/OverviewProfile";
import ProjectsProfile from "./components/ProjectsProfile";
import SearchPage from "./components/SearchPage";
import AddProject from "./components/AddProject";

function Home() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-area">
          <Routes>
            <Route path="/" element={<Entry />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="projects" element={<ProjectsBlock />} />
              <Route path="settings" element={<Settings />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="chats/*" element={<Inbox />} />
            </Route>

            {/* 🔹 Tashqi sahifalar */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/community" element={<Community />} />

            {/* 🔹 Profile nested routing */}
            <Route path="/profile" element={<Profile />}>
              <Route index element={<Overview />} />
              <Route path="settings" element={<ProfileSettings />} />
              <Route path="overview" element={<Overview />} />
              <Route path="projects" element={<ProjectsProfile />} />
            </Route>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/add-project" element={<AddProject />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
