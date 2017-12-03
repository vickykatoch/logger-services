const LoggerFactory = require('../../log-writers/logger-factory');
const appConfig = require('../../config/appConfig');
const cluster = require('cluster');
const Constants = require('./message-types');
const CONFIG_NAME = 'RTLOGGERSERVER';
const JT_LOGGER = 'JT_LOGGER';
const SERVER_LOGGER = 'SERVER_LOGGER';
//#region Private Methods
const validateConfig = (config) => {
    const rtLogger = config[CONFIG_NAME];
    if (!rtLogger) {
        throw new Error(`Section : ${CONFIG_NAME} is missing from the application configuration`);
    }
};
const handlerWorkerMessages = (worker, message) => {
    const serverlogger = privateFields.get(SERVER_LOGGER);
    const jtLogger = privateFields.get(JT_LOGGER);
    serverlogger.info(`Message received from worker : ${worker.id}`);
    switch (message.type) {
        case Constants.MessageTypes.WORKER_STARTED:
            const serverConfig = appConfig.config[CONFIG_NAME];
            worker.send({ type: Constants.MessageTypes.START_HTTP_SERVER, payload: serverConfig.port });
            break;
        default:
            serverlogger.warn(`Unknown message received by RTSERVER master from worker : ${worker.id}`, message);
    }
};
const privateFields = new Map();
const workers = new Map();

//#endregion

class LoggerMaster {

    constructor() {

    }
    init() {
        try {
            appConfig.loadConfig();
            validateConfig(appConfig.config);
            const serverConfig = appConfig.config[CONFIG_NAME];
            privateFields.set(CONFIG_NAME, serverConfig);
            privateFields.set(JT_LOGGER, LoggerFactory.getLogger(JT_LOGGER, serverConfig.jtLoggerOptions));
            privateFields.set(SERVER_LOGGER, LoggerFactory.getLogger('LoggerMaster', serverConfig.serverLoggerOptions));
        } catch (err) {
            console.error('Failed to initialize application', err);
            console.error('Exiting the application');
            process.exit(1);
        }
    }
    spawnChildLoggers() {
        const serverlogger = privateFields.get(SERVER_LOGGER);
        const serverConfig = privateFields.get(CONFIG_NAME);
        serverlogger.info(`Spawning child loggers. Count : ${serverConfig}`);

        for (let i = 0; i < +serverConfig.instanceCount; i++) {
            const worker = cluster.fork();
            workers.set(worker.id, worker);
            worker.on('message', (msg) => {
                handlerWorkerMessages(worker, msg);
            });
        }
        cluster.on('exit', (worker, code, signal) => {
            if (code !== 0 && !worker.exitedAfterDisconnect) {
                serverlogger.warn(`Worker : ${worker.id} crashed. Starting a new worker...`);
                workers.delete(worker.id);
                const newWorker = cluster.fork();
                workers.set(newWorker.id, newWorker);
            }
        });

    }
}



module.exports = new LoggerMaster();