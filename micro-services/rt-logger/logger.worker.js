const express = require('express');
var bodyParser = require("body-parser");
const Constants = require('./message-types');
const cors = require('cors');

console.info(`Started web server worker : ${process.pid}`);

process.on('message', (message) => {
    console.info('Message received from master ', message);
    switch (message.type) {
        case Constants.MessageTypes.START_HTTP_SERVER:
            onStartHttp(message.payload);
            break;
        default:
        // serverlogger.warn(`Unknown message received by RTSERVER master from worker : ${worker.id}`, message);
    }
});

function onStartHttp(port) {
    console.info(`Starting http server on Worker : ${process.pid}, port : ${port}`);
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(require('./routes'));
    app.get('/', (req, res) => {
        res.send(`Hello World from : ${process.pid}`);
    });
    app.listen(port, () => {
        console.info(`RTLOGGER web server : ${process.pid} listening on port : ${port}`);
    });
}
process.send({ type: Constants.MessageTypes.WORKER_STARTED });
console.info(`Worker started ${process.pid}`);

