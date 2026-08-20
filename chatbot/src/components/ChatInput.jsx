import { useState } from "react";
import Chatbot from "supersimpledev/chatbot.js";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessages }) {

    const [inputText, setInputText] = useState("");

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID()
            }
        ];

        const response = Chatbot.getResponse(inputText);

        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: "robot",
            id: crypto.randomUUID()
            }
        ]);

        setInputText("");
    }

    return (
        <div className="input-div">

            <input
                className="text-input"
                placeholder="Send a message to Chatbot"
                size="30"
                value={inputText}
                onChange={saveInputText}
            />

            <button
                className="send-button"
                onClick={sendMessage}
            >
                Send
            </button>

        </div>
    );
}

export default ChatInput;