import React from "react";
import "./ProjectsHome.css";

export default function Loyihalar() {
  const malumot = [
    {
      nom: "Portfolio Site",
      korinish: "Public",
      tavsif: "Made Portfolio Website by using React + Vite.",
      sana: "May, 2025",
      daraja: 90,
    },
    {
      nom: "FastAPI Backend",
      korinish: "Private",
      tavsif: "FastAPI and Database for Telegram Bot",
      sana: "March, 2025",
      daraja: 70,
    },
    {
      nom: "Node.js Chat Server",
      korinish: "Public",
      tavsif: "Chat System made by using Websocket.",
      sana: "April, 2025",
      daraja: 55,
    },
    {
      nom: "SpaceCoders UI Kit",
      korinish: "Public",
      tavsif: "Component library by using React.",
      sana: "May, 2025",
      daraja: 85,
    },
  ];

  return (
    <div className="loyihalar-sahifa">
      <h2>📁 Your Projects</h2>
      <div className="loyihalar-tarmoq">
        {malumot.map((l, i) => (
          <div className="loyiha-karta" key={i}>
            <div className="loyiha-bosh">
              <h3>{l.nom}</h3>
              <span
                className={`holat ${
                  l.korinish === "Public" ? "ochiq" : "yopiq"
                }`}
              >
                {l.korinish}
              </span>
            </div>
            <p className="loyiha-tavsif">{l.tavsif}</p>
            <div className="loyiha-past">
              <div className="jarayon">
                <div
                  className="jarayon-bar"
                  style={{ width: `${l.daraja}%` }}
                ></div>
              </div>
              <div className="loyiha-malumot">
                <span>{l.daraja}% bajarilgan</span>
                <span className="sana">{l.sana}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
