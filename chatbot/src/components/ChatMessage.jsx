import robotImage from "../assets/robot.webp";
import userImage from "../assets/user.webp";
import "./ChatMessage.css"

function ChatMessage({ message, sender }) {

    return (
        <div className={sender === "robot" ? "robot-div" : "user-div"}>

            {sender === "robot" && (
                <img
                    src={robotImage}
                    width="50"
                    alt="Robot"
                />
            )}

            <div className="message-div">
                {message}
            </div>

            {sender === "user" && (
                <img
                    src={userImage}
                    width="50"
                    alt="User"
                />
            )}

        </div>
    );
}

export default ChatMessage;