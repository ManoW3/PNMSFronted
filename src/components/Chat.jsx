import React, { useState } from "react";
import { Send, Home, Settings, User } from "lucide-react";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const yap = (text) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "/api", false);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    let payload = {
      session: getCookie("session"),
      text: text,
    };
    xmlHttp.send(JSON.stringify(payload));
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: xmlHttp.responseText, sender: "Keith" },
    ]);
  };

  const sendUserMessage = () => {
    if (userInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, sender: "user" },
      ]);
      yap(userInput);
      setUserInput("");
    }
  };

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-[#F2E8CF] text-black"
      } justify-center`}
    >
      {/* Taskbar */}
      <div
        className={`w-64 ${
          darkMode ? "bg-gray-800" : "bg-[#386641]"
        } p-4 mx-4 my-4 rounded-lg shadow-lg`}
      >
        <div className="space-y-8">
          <TaskbarIcon icon={Home} label="Home" />
          <TaskbarIcon icon={User} label="Profile" />
          <TaskbarIcon icon={Settings} label="Settings" />
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`mt-4 p-2 rounded-lg w-full transition-colors ${
            darkMode
              ? "bg-gray-600 text-white hover:bg-gray-700"
              : "bg-[#6A994E] text-white hover:bg-[#558e48]"
          }`}
        >
          Toggle Dark Mode
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col mx-4 my-4 max-w-4xl">
        <div
          className={`flex-1 overflow-y-auto p-4 ${
            darkMode ? "bg-gray-700" : "bg-white"
          } rounded-lg shadow-lg`}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${
                  message.sender === "user"
                    ? darkMode
                      ? "bg-[#6A994E] text-white"
                      : "bg-[#386641] text-white"
                    : darkMode
                    ? "bg-[#4b6a43] text-white"
                    : "bg-[#A7C957] text-[#386641]"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex mt-4 space-x-4">
          {/* User Input */}
          <div
            className={`flex-1 p-4 ${
              darkMode ? "bg-gray-800" : "bg-[#6A994E]"
            } rounded-lg shadow-lg`}
          >
            <div className="flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendUserMessage()}
                className={`flex-1 p-2 rounded-l-lg focus:outline-none ${
                  darkMode ? "bg-gray-600 text-white" : ""
                }`}
                placeholder="Type a message as User..."
              />
              <button
                onClick={sendUserMessage}
                className={`${
                  darkMode ? "bg-[#BC4749]" : "bg-[#BC4749]"
                } text-white p-2 rounded-r-lg hover:bg-[#a93e40] transition-colors`}
              >
                <Send size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className={`w-64 ${
          darkMode ? "bg-gray-800" : "bg-[#A7C957]"
        } p-4 mx-4 my-4 rounded-lg shadow-lg`}
      >
        <h2
          className={`font-bold text-xl mb-4 ${
            darkMode ? "text-white" : "text-[#386641]"
          }`}
        >
          Current Lesson
        </h2>
        <p className={`${darkMode ? "text-white" : "text-[#386641]"}`}>
          To backend: make this say what they will be learning in the lesson
        </p>
      </div>
    </div>
  );
};

const TaskbarIcon = ({ icon: Icon, label }) => (
  <div className="flex items-center text-white hover:bg-[#6a994e] p-2 rounded-lg cursor-pointer">
    <Icon size={24} />
    <span className="ml-2">{label}</span>
  </div>
);

export default ChatUI;
