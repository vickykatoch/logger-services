const AbstractLogWriter = require('./log-writer');
const bunyan = require('bunyan');



class LogFileWriter extends AbstractLogWriter {

    constructor(appName, options) {
        super();
        this.logger = bunyan.createLogger({
            name: appName, streams: [ options ]
        });
    }

    write(loggingEvents) {
        if (loggingEvents) {
            // const value = JSON.stringify(loggingEvents);
            // value = value.sub(1,value.length-1);
            // this.logger.info(JSON.stringify(loggingEvents));
            const value = JSON.stringify(loggingEvents,'\n','');
            this.logger.info(value);
            // switch (loggingEvents.level) {
            //     case 3:
            //         this.logger.info(...loggingEvents);
            //         break;
            //     default:
            //         console.log('Unknown Logging Event');
            // }

        }
    }
}
module.exports = LogFileWriter;