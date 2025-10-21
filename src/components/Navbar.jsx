import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mainlogo from "../assets/onlylogo.png";
import nonuserlogo from "../assets/nonuser.png";
import SearchPanel from "./SearchPanel";

function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="topbar">
      <div className="top-left">
        <div className="brand">
          <div className="logo-circle">
            <img src={mainlogo} width={100} height={40} alt="logo" />
          </div>
          <div className="brand-text">SpCODERS!</div>
        </div>

        {/* 🔥 Mobil uchun hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? "bar active" : "bar"}></div>
          <div className={menuOpen ? "bar active" : "bar"}></div>
          <div className={menuOpen ? "bar active" : "bar"}></div>
        </div>

        {/* 🔗 Navigatsiya linklari */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link
            className={location.pathname === "/" ? "active" : ""}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={location.pathname === "/projects" ? "active" : ""}
            to="/projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            className={location.pathname === "/community" ? "active" : ""}
            to="/community"
            onClick={() => setMenuOpen(false)}
          >
            Community
          </Link>
          <Link
            className={location.pathname === "/profile" ? "active" : ""}
            to="/profile"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
        </nav>
      </div>

      <div className="top-right">
        <div className="search">
          <SearchPanel />
        </div>
        <Link to="/profile">
          <div className="user">
            <div className="avatar">
              <img
                src={user?.profile_pic ? user.profile_pic : nonuserlogo}
                width={40}
                height={40}
                alt="user"
              />
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
