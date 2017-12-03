const MessageType = require('../message-types').MessageTypes;

module.exports = (req,res,next) => {
    // console.log('Request Received, Sending to parent...');
    process.send({
        type : MessageType.LOG_EVENT,
        payload : req.body
    });
    res.send({ status: 'OK'});
};