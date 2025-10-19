import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mainlogo from "../assets/onlylogo.png";
import nonuserlogo from "../assets/nonuser.png";

function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  setTimeout(() => {
    console.log(user)
  }, 1000)

  return (
    <header className="topbar">
      <div className="top-left">
        <div className="brand">
          <div className="logo-circle">
            <img src={mainlogo} width={100} height={40} alt="logo"/>
          </div>
          <div className="brand-text">SpCODERS!</div>
        </div>
        <nav className="nav-links">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={location.pathname === "/projects" ? "active" : ""} to="/projects">Projects</Link>
          <Link className={location.pathname === "/community" ? "active" : ""} to="/community">Community</Link>
          <Link className={location.pathname === "/profile" ? "active" : ""} to="/profile">Profile</Link>
        </nav>
      </div>

      <div className="top-right">
        <div className="search">
          <input placeholder="Search projects or people..." />
        </div>
        <Link to="/profile">
          <div className="user">
            <div className="avatar">
              <div className="avatar">
                <img
                  src={user?.profile_pic ? user.profile_pic : nonuserlogo}
                  width={40}
                  height={40}
                  alt="user"
                />
              </div>
            </div>
            <div className="username">
              <div className="name">{user ? user.username : "Guest"}</div>
              <div className="handle">@{user ? user.username : "guest"}</div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
