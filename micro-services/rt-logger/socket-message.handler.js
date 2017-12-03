const Constants = require('./message-types');
const Rx = require('rxjs');
const LoggerFactory = require('./writers/logger-factory');
const config = require('../../config/config');


class SocketMessageHandler {

    constructor(socket) {
        this.socket = socket;
        this.logWriter = LoggerFactory.getLogger(config.logWriter.type, 'EVENT_LOG_WRITER');
    }
    notifyConnectionSucceeded() {
        this.socket.emit(Constants.SocketTopics.RT_LOG_OUT, { type: Constants.MessageTypes.CONNECTION_STATUS, payload: true });
    }
    processData(payload) {
        if (payload && payload.type) {
            switch (payload.type) {
                case Constants.MessageTypes.LOG_EVENT:
                    const logEvents = Array.isArray(payload.payload) ? payload.payload : [payload.payload];
                    this.logWriter.write(logEvents);
                    console.log(`Line written : ${logEvents.length}`);
                    break;
                case Constants.MessageTypes.SET_USER:
                    this.socket.userId = payload.payload;
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