import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ChatPage.css";

export default function ChatPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "You" }]);
    setInput("");
  };

  return (
    <div className="chatpage">
      <div className="chat-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
        <h2>{name}</h2>
      </div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <p
            key={i}
            className={`chat-msg ${msg.sender === "You" ? "me" : "them"}`}
          >
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
