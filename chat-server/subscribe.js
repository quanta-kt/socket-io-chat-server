module.exports = (io, socket) => {
    socket.on('subscribe', function(data) {
        console.log('subscribe trigged')
        const room_data = JSON.parse(data)
        userName = room_data.userName;
        const roomName = room_data.roomName;
    
        socket.join(`${roomName}`)
        console.log(`Username : ${userName} joined Room Name : ${roomName}`)
        

        socket.to(`${roomName}`).emit('newUserToChatRoom',userName);
    });

    socket.on('unsubscribe',function(data) {
        console.log('unsubscribe trigged')
        const room_data = JSON.parse(data)
        const userName = room_data.userName;
        const roomName = room_data.roomName;
    
        console.log(`Username : ${userName} left Room Name : ${roomName}`)
        socket.broadcast.to(`${roomName}`).emit('userLeftChatRoom',userName)
        socket.leave(`${roomName}`)
    });
};