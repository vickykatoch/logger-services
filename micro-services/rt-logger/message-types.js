const MessageTypes = Object.freeze({
    WORKER_STARTED : 'WORKER_STARTED',
    START_HTTP_SERVER : 'START_HTTP_SERVER',

    CONNECTION_STATUS       : 'CONNECTION_STATUS',
    LOG_EVENT               : 'LOG_EVENT',
    SET_USER                : 'SET_USER',
    DISCONNECTED            : 'DISCONNECTED'
});
const SocketTopics  = Object.freeze({
    RT_LOG_IN               : 'RT_LOG_IN',
    RT_LOG_OUT              : 'RT_LOG_OUT'
});



module.exports = {
    MessageTypes,
    SocketTopics
};