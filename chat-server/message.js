const Crypto = require("crypto");

module.exports = (io, socket) => {
    socket.on('message', function(data, callback) {

        console.log(`mew message: ${JSON.stringify(data, "    ")}`)

        const uid = Crypto.randomUUID();
        const messageData = {
            uid: uid,
            ...data
        };

        callback(messageData);
        socket.broadcast.emit('message', messageData);
        socket.emit('message', messageData);
    });
}