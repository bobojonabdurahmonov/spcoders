import React from "react";
import "./Community.css";

export default function Community() {
  return (
    <div className="jamiyat">
      <header className="jamiyat-bosh">
        <h1>SpCoders Community</h1>
        <p className="jamiyat-ta’rif">
          The number one website in the world for programmers by sharing projects and chatting
        </p>
        <a href="https://t.me/spcodersceo" target="_blank"><button className="join-btn">Join to Community</button></a>
      </header>

      <section className="jamiyat-bo‘limlar">
        <div className="bo‘lim">
          <h2>About Us</h2>
          <p>
            SpCoders — For all type of coders can practise and share projects with others!
          </p>
        </div>

        <div className="bo‘lim">
          <h2>Purpose</h2>
          <p>
            The opportunity for new coders in their way!
          </p>
        </div>

        <div className="bo‘lim">
          <h2>Support</h2>
          <p>
            We not only learn, but we also support each other.
            Through collaborative projects, each member increases their expertise.
          </p>
        </div>
      </section>

      <section className="jamiyat-stat">
        <div className="stat-blok">
          <h3>1,240+</h3>
          <p>Users</p>
        </div>
        <div className="stat-blok">
          <h3>5,800+</h3>
          <p>Chatting</p>
        </div>
        <div className="stat-blok">
          <h3>120+</h3>
          <p>Projects</p>
        </div>
      </section>

      <section className="jamiyat-havolalar">
        <h2>Links</h2>
        <ul>
          <li><a href="#">Telegram</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </section>
    </div>
  );
}
