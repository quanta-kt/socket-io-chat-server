module.exports = (io, socket) => {
    socket.on('typing', function(payload) {
        socket.broadcast.emit('typing', payload);
    });

    socket.on('stopTyping', function(roomNumber) {
        socket.broadcast.emit('stopTyping', payload);
    });
}