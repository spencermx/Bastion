"use client";
import { useState, useEffect, useRef } from "react";

export default function ChatPage() {
  const [socket, setSocket] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const ws = new WebSocket(`${protocol}://${window.location.host}/ws/chat`);

    ws.onopen = () => {
      console.log("Connected to chat WebSocket");
      setSocket(ws);
    };
    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
    ws.onclose = () => {
      console.log("Disconnected from chat WebSocket");
      setSocket(null);
    };
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN && input.trim()) {
      socket.send(input);
      setMessages((prev) => [...prev, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 text-gray-100">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Live Chat
      </h1>

      <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
        Welcome to the live chat! Connect with others in real-time.
      </p>

      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-xl">
        {/* Messages Container */}
        <div className="mb-4 sm:mb-6 h-64 sm:h-96 overflow-y-auto bg-gray-900 rounded-lg p-3 sm:p-4">
          <div className="flex flex-col space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.startsWith("You:") ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.startsWith("You:")
                      ? "bg-gradient-to-r from-blue-500 to-teal-400 text-gray-900"
                      : "bg-gray-800 text-gray-100"
                  } max-w-[80%] break-words`}
                >
                  {msg}
                </div>
              </div>
            ))}
            {/* Add this div at the end of messages */}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Type your message..."
            className="flex-1 w-full sm:w-auto px-4 py-3 bg-gray-900 text-gray-100 rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none placeholder-gray-500"
          />
          <button
            onClick={sendMessage}
            disabled={!socket}
            className={`w-full sm:w-auto px-6 py-3 rounded-lg font-bold transition-colors ${
              socket
                ? "bg-gradient-to-r from-blue-500 to-teal-400 text-gray-900 hover:from-teal-400 hover:to-blue-500"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            Send
          </button>
        </div>

        {/* Connection Status */}
        <div className="mt-4 text-sm text-center">
          {socket ? (
            <span className="text-teal-400">Connected to chat</span>
          ) : (
            <span className="text-red-400">Disconnected from chat</span>
          )}
        </div>
      </div>
    </div>
  );
}