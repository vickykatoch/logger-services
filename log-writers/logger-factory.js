const bunyan = require('bunyan');

class LoggerFactory {

    getLogger(moduleName,options) {
        return bunyan.createLogger({
            name: moduleName, streams: [ options ]
        });
    }
}

module.exports = new LoggerFactory();