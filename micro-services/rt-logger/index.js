const cluster = require('cluster');
const LoggerMaster = require('./logger-master');

if(cluster.isMaster) {
    LoggerMaster.init();
    LoggerMaster.spawnChildLoggers();
} else {
    require('./logger.worker');
}