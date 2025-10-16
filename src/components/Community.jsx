import React, { useState } from "react";

function Community() {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  const sendMessage = () => {
    if (msg.trim()) {
      setMessages([...messages, msg]);
      setMsg("");
    }
  };

  return (
    <div className="page community">
      <h2>Community Chat</h2>
      <div className="chat-box">
        {messages.map((m, i) => (
          <div key={i} className="message">{m}</div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Write a message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Community;
