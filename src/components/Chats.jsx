import React, { useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import userchat from "../assets/nonuser.png";
import "./Chats.css";
import "./ChatPage.css";

function ChatList() {
  const navigate = useNavigate();

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
              <button onClick={() => navigate(`chat/${chat.name}`)}>Go chat</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "You", text: input }]);
    setInput("");
  };

  return (
    <div className="chatpage">
      <div className="chat-header">
        <button className="back-btn" onClick={() => navigate("../")}>
          ← Back
        </button>
        <h2>{name}</h2>
      </div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <p key={i} className={`chat-msg ${msg.sender === "You" ? "me" : "them"}`}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default function Inbox() {
  return (
    <Routes>
      <Route path="/" element={<ChatList />} />
      <Route path="chat/:name" element={<ChatPage />} />
    </Routes>
  );
}
