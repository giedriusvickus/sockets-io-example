import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

const Feed = ({ setMessages }) => {
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("newData", (data) => {
            setMessages(data);
        });
    }, []);

    return <span />;
};

export default Feed;
