import React, { useEffect, useState } from "react";
import userlogo from "../assets/nonuser.png";
import "./Profile.css"

export default function Profile() {
  const [projectsCount, setProjectsCount] = useState(0);

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="profil-sahifa">
      <div className="profil-bosh">
        <img src={userlogo} alt="avatar" className="profil-avatar" />
        <div className="profil-info">
          <h2 className="profil-nomi">{user ? user.username : "Guest"}</h2>
          <p className="profil-tag">@{user ? user.username : "Guest"}</p>
          <p className="profil-bio">Frontend Developer</p>
        </div>
      </div>

      <div className="profil-statlar">
        <div className="stat-item">
          <div className="stat-soni">{projectsCount}</div>
          <div className="stat-nomi">Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-soni">3</div>
          <div className="stat-nomi">Achievements</div>
        </div>
        <div className="stat-item">
          <div className="stat-soni">120</div>
          <div className="stat-nomi">Followers</div>
        </div>
      </div>

      <div className="profil-harakatlar">
        <button className="tugma-outline">Edit Profile</button>
        <button className="tugma-asosiy">Settings</button>
      </div>
    </div>
  );
}
