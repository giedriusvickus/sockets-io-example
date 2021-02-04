import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

const Feed = () => {
    const [messageHistory, setMessageHistory] = useState([]);
    const [lastMessage, setLastMessage] = useState(null);

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("newData", (data) => {
            setLastMessage(data);
        });
    }, []);

    useEffect(() => {
        lastMessage && setMessageHistory((prev) => prev.concat(lastMessage));
    }, [lastMessage]);

    return (
        <div>
            {messageHistory ? (
                <ul>
                    {messageHistory.map((message, idx) => (
                        <li key={idx}>{message}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default Feed;
