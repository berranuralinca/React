import "./App.css";
import { useState } from "react";
import ChatMessages from "./components/ChatMessages.jsx";
import ChatInput from "./components/ChatInput.jsx";

function App() {

    const [chatMessages, setChatMessages] = useState([
        {
            message: "hello chatbot",
            sender: "user",
            id: "id1"
        },
        {
            message: "Hello! How can I help you?",
            sender: "robot",
            id: "id2"
        },
        {
            message: "Can you get me today's date?",
            sender: "user",
            id: "id3"
        },
        {
            message: "Today is August 16",
            sender: "robot",
            id: "id4"
        }
    ]);

    return (
        <div className="app-div">

            <ChatMessages
                chatMessages={chatMessages}
            />

            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />

        </div>
    );
}

export default App;