import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ChatPage.css";

export default function ChatPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);

  const sender = localStorage.getItem("user");

  useEffect(() => {
    ws.current = new WebSocket(`ws://localhost:8000/ws/chat/${sender}/`);

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((prev) => [...prev, { sender: data.sender, text: data.message }]);
    };

    ws.current.onclose = () => console.log("❌ WebSocket closed");

    return () => ws.current.close();
  }, [sender]);

  const sendMessage = () => {
    if (input.trim() && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          sender,
          receiver: name,
          message: input,
        })
      );
      setMessages((prev) => [...prev, { sender: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="chatpage">
      <div className="chat-header">
        <button className="back-btn" onClick={() => navigate("/")}>← Back</button>
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
