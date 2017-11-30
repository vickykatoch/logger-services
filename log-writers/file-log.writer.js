const AbstractLogWriter = require('./log-writer');
const bunyan = require('bunyan');



class LogFileWriter extends AbstractLogWriter {

    constructor(appName, options) {
        super();
        this.logger = bunyan.createLogger({
            name: appName, streams: [ options ]
        });
    }

    write(loggingEvent) {
        if (loggingEvent && loggingEvent.level) {
            switch (loggingEvent.level) {
                case 3:
                    this.logger.info('L',loggingEvent);
                    break;
                default:
                    console.log('Unknown Logging Event');
            }

        }
    }
}
module.exports = LogFileWriter;