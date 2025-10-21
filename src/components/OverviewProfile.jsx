import React from "react";
import "./Profile.css";

function Overview() {
  return (
    <div className="overview-container">
      <h2 className="section-title">Activity Overview</h2>
      <p className="section-subtitle">
        Here’s what you’ve been working on recently 👇
      </p>

      <div className="activity-cards">
        <div className="activity-card">
          <h3>12 Active Projects</h3>
          <p>You’ve been busy building amazing stuff 🚀</p>
        </div>

        <div className="activity-card">
          <h3>3 Contributions This Week</h3>
          <p>Nice consistency! Keep your streak going 🔥</p>
        </div>

        <div className="activity-card">
          <h3>7 Followers</h3>
          <p>People are starting to notice your work 💪</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
