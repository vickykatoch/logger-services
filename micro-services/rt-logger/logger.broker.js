const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const config = require('../../config/config');
const Constants = require('./message-types');
const SocketMessageHandler = require('./socket-message.handler');


const sockets = {};

server.listen(config.logWriter.port, () => {
    console.log(`LOGWRITER Express web server (${process.pid}) is listening on port : ${config.logWriter.port}`);
});

io.on('connection', (socket) => {
    sockets[socket.id] = socket;
    console.log('Connection Received');
    socket['messageHandler'] = new SocketMessageHandler(socket);
    socket.messageHandler.notifyConnectionSucceeded();
    socket.on(Constants.SocketTopics.RT_LOG_IN, (data)=> {
        socket.messageHandler.processData(data);
    });
    socket.on('disconnect', ()=> {
        socket.messageHandler.dispose();
        delete sockets[socket.id];
    });
});
