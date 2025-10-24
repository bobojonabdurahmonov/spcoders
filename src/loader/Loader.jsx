import React, { useEffect } from "react";
import "./Loader.css";

export default function WelcomeLoader({
  username = "Guest",
  visible = false,
  duration = 1800,
  onFinish = () => {},
}) {
  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => {
      onFinish();
    }, duration);
    return () => clearTimeout(timeout);
  }, [visible, duration, onFinish]);

  if (!visible) return null;

  return (
    <div className="wl-overlay">
      <div className="wl-card fade-in">
        <div className="wl-spinner"></div>
        <h1 className="wl-welcome">
          Welcome, <span className="wl-username">{username}</span>
        </h1>
        <p className="wl-sub">Preparing your dashboard...</p>
      </div>
    </div>
  );
}
