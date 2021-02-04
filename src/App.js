import React, { useState, useEffect } from "react";
import "./App.css";
import Feed from "./Feed";

function App() {
    const [messageHistory, setMessageHistory] = useState([]);
    const [lastMessage, setLastMessage] = useState([]);

    useEffect(() => {
        lastMessage && setMessageHistory((prev) => prev.concat(lastMessage));
    }, [lastMessage]);

    return (
        <div className="App">
            <header className="App-header">
                <Feed setMessages={(data) => setLastMessage(data)} />
                <div>
                    {messageHistory ? (
                        <ul>
                            {messageHistory.map((message, idx) => (
                                <li key={idx}>{message}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </header>
        </div>
    );
}

export default App;
