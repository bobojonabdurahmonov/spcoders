import React from "react";
import userchat from "../assets/nonuser.png";
import "./Chats.css";

export default function Inbox() {
  const chats = [
    { id: 1, name: "Alice", lastMessage: "Hey, how's your project?" },
    { id: 2, name: "Bob", lastMessage: "Let's push to GitHub today!" },
    { id: 3, name: "Charlie", lastMessage: "Check this new UI I made." },
    { id: 4, name: "Diana", lastMessage: "I fixed that backend bug!" },
  ];

  return (
    <div className="inbox-wrapper">
      <h2 className="inbox-title">Inbox</h2>

      <div className="chatsblock">
        {chats.map((chat) => (
          <div key={chat.id} className="chat-item">
            <div className="chatavatar">
              <img src={userchat} alt="avatar" />
              <div className="chat-info">
                <h3>{chat.name}</h3>
                <p>{chat.lastMessage}</p>
              </div>
            </div>

            <div className="chatbtn">
              <button>Go chat</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
