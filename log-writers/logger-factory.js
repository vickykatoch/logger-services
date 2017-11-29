
const LogFileWriter = require('./file-log.writer');
const config = require('../config/config');


class LoggerFactory {

    getLogger(type, appName) {
        return new LogFileWriter(appName,
            {
                type: 'rotating-file',
                level: 'info',
                period: '1d',   // daily rotation
                count: 7,        // keep 3 back copies
                path: config.logPath 
            });
    }
}

module.exports = new LoggerFactory();