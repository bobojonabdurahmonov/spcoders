import React from "react";
import "./Settings.css";
import userlogo from "../assets/nonuser.png";

function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <>
      <div className="header-row">
        <h1>DASHBOARD</h1>
        <div className="filters"></div>
      </div>

      <div className="cards-row">
        {/* === CODER CARD === */}
        <div className="card small">
          <h3>Coder</h3>
          <div className="card-stats">
            <img src={userlogo} className="card-userlogo" alt="user" />
            <StatCard title="Path" value="FrontEnd" />
            <StatCard title="Projects" value="4" />
            <StatCard title="Streak" value="4 days" />
            <StatCard title="Achievements" value="5" />
          </div>
        </div>

        {/* === PROJECTS CARD === */}
        <div className="card small projectsblock">
          <h3>Projects</h3>
          <div className="projects">
            <div className="project">
              <h1>React + Vite</h1>
              <p>Public</p>
              <p>Portfolio site</p>
              <h4>January, 2025</h4>
            </div>
            <div className="project">
              <h1>FastAPI + SQLite</h1>
              <p>Private</p>
              <p>Telegram bot backend</p>
              <h4>March, 2025</h4>
            </div>
          </div>
        </div>

        {/* === PROGRESS CARD === */}
      <div className="card small progress-card">
        <h3>Learning Progress</h3>
        <div className="progress-item">
          <span>React</span>
          <div className="progress-bar"><div style={{ width: "80%" }}></div></div>
        </div>
        <div className="progress-item">
          <span>FastAPI</span>
          <div className="progress-bar"><div style={{ width: "60%" }}></div></div>
        </div>
        <div className="progress-item">
          <span>SQLite</span>
          <div className="progress-bar"><div style={{ width: "50%" }}></div></div>
        </div>
        <div className="progress-item">
          <span>Node.js</span>
          <div className="progress-bar"><div style={{ width: "35%" }}></div></div>
        </div>
      </div>


        {/* === ACTIVITY CARD === */}
        <div className="card activity-card">
          <h3>Activity</h3>
          <div className="activity-timeline">
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <h4>Account Joined</h4>
                <p>December, 2024</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <h4>Uploaded Project “React + Vite”</h4>
                <p>January, 2025</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <h4>Earned “Consistent Coder” Badge</h4>
                <p>February, 2025</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <h4>Reached 4-Day Streak</h4>
                <p>October, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-section about">
            <h2>SpCode</h2>
            <p>
              A creative space where developers share their ideas, build projects,
              and grow together. Join the coding movement — one line at a time.
            </p>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:team@spcode.dev">pubgmbobojon@gmail.com</a></p>
            <p>Location: Samarkand, Uzbekistan</p>
          </div>

          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://t.me/spcodersceo" target="_blank" rel="noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://github.com/bobojonabdurahmonov" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://instagram.com/bbbv_vv11" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@TechWithBeejay" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 SpCode — Crafted with ❤️ by Developers</p>
        </div>
      </footer>
    </>
  );
}
