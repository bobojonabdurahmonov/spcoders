import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import Projects from "./components/Projects";
import Community from "./components/Community";
import Profile from "./components/Profile";
import "./App.css";

function Home() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-area">
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
