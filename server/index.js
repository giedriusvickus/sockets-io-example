const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;

const app = express();
const faker = require("faker");

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    let interval = setInterval(() => {
        socket.emit("newData", `${faker.name.findName()} - ${faker.internet.email()}`);
    }, 2000);

    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });

    socket.emit("SessionStarted", `started`);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
