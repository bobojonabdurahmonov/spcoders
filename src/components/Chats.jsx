import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import userchat from "../assets/nonuser.png";
import "./Chats.css";
import "./ChatPage.css";

// Chat list
function ChatList() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Foydalanuvchini localStorage'dan olish
    const user = localStorage.getItem("user");
    if (!user) {
      const name = prompt("Enter your username:");
      localStorage.setItem("user", name);
      setUsername(name);
    } else {
      setUsername(user);
    }
  }, []);

  const chats = [
    { id: 1, name: "Beejay", lastMessage: "Hey, how's your project?" },
    { id: 2, name: "Bob", lastMessage: "Let's push to GitHub today!" },
    { id: 3, name: "Charlie", lastMessage: "Check this new UI I made." },
    { id: 4, name: "Diana", lastMessage: "I fixed that backend bug!" },
  ];

  return (
    <div className="inbox-wrapper">
      <h2 className="inbox-title">Hello, {username || "User"}</h2>
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
              <button onClick={() => navigate(`chat/${chat.name}`)}>
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Chat page
function ChatPage() {
  const { name } = useParams(); // receiver
  const sender = localStorage.getItem("user");
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    if (!sender) return;

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

// Main routes
export default function Inbox() {
  return (
    <Routes>
      <Route path="/" element={<ChatList />} />
      <Route path="chat/:name" element={<ChatPage />} />
    </Routes>
  );
}
