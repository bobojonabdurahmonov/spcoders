import React from "react";
import "./Achievements.css";

function Achievements() {
  const achievements = [
    {
      emoji: "🏆",
      title: "Top Rank",
      desc: "Reached Gold level in community ranking.",
      collected: true,
    },
    {
      emoji: "🔥",
      title: "7-Day Streak",
      desc: "Active every day for one week.",
      collected: true,
    },
    {
      emoji: "💬",
      title: "Helpful Member",
      desc: "Answered 50+ questions in the community.",
      collected: false,
    },
    {
      emoji: "💻",
      title: "Project Builder",
      desc: "Published your first public project.",
      collected: false,
    },
  ];

  return (
    <div className="achievements-page">
      <h1 className="achievements-title">Your Achievements</h1>
      <p className="achievements-sub">
        Complete goals to unlock more rewards 🎯
      </p>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`achievement-card ${
              item.collected ? "collected" : "locked"
            }`}
          >
            <div className="achievement-icon">
              {item.collected ? item.emoji : "🔒"}
            </div>

            <div className="achievement-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button
                className={`collect-btn ${
                  item.collected ? "collected-btn" : "locked-btn"
                }`}
                disabled={item.collected}
              >
                {item.collected ? "Collected ✓" : "Collect"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
