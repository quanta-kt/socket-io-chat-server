const http = require("http");
const { Server } = require('socket.io');
const { env } = require('process');

const registerTypingHandlers = require("./chat-server/typing");
const registerMessageHandlers = require("./chat-server/message");

const port = env.PORT || 8080;

const httpServer = http.createServer();

const io = new Server(httpServer);

function onConnection(socket) {
    console.log(`Connection: SocketId = ${socket.id}`);

    registerTypingHandlers(io, socket);
    registerMessageHandlers(io, socket);

    socket.on('disconnect', function() {
        console.log(`One of sockets disconnected = ${socket.id}`);
    });
}

io.on('connection', onConnection);

httpServer.listen(port);
