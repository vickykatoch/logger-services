const Constants = require('./message-types');
const Rx = require('rxjs');

class SocketMessageHandler {
    

    constructor(socket) {
        this.socket = socket;
    }
    notifyConnectionSucceeded() {
        this.socket.emit(Constants.SocketTopics.RT_LOG_OUT, { type: Constants.MessageTypes.CONNECTION_STATUS, payload: true });
    }
    processData(payload) {
        if(payload && payload.type) {
            console.log(payload);
            switch(payload.type) {
                case Constants.MessageTypes.LOG_EVENT:
                    console.info('Log Event Received : ', payload.payload);
                    break;
                case Constants.MessageTypes.SET_USER:
                    socket.userId = payload.payload;
                    break;               
                default:
                    console.warn('Unknown message type received : ', payload);
            }
        };
    }
    dispose() {
         // DO CLEAN UP HERE
    }
}

module.exports = SocketMessageHandler;