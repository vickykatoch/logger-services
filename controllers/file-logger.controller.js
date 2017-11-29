'use strict';
const LoggerControllerBase = require('./logger.controllerbase');
const bunyan = require('bunyan');



class FileLoggerController extends LoggerControllerBase {
    constructor(appName) {
        super();
        this.logger = bunyan.createLogger({name: appName});
    }
    log(logEvent) {
        console.log('File Logger Logged');
        this.logger.info(logEvent);
    }
}

module.exports = FileLoggerController;