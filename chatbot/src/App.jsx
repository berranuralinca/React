import "./App.css";
import { useState,useEffect } from "react";
import ChatMessages from "./components/ChatMessages.jsx";
import ChatInput from "./components/ChatInput.jsx";
import {Chatbot} from "supersimpledev";

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

    useEffect(() => {
            Chatbot.addResponses({
            'goodbye': 'Goodbye. Have a great day!',
            'give me a unique id': function() {
                return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
            },
            "kalabilirim":"ya da gidebilirim",
            "kafama göre kararım":"değişebilir",
            "tam aklıma geldiğin anda":"fikrimden bile cayabilirim"
            });
    })

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