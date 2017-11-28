'use strict';
const LoggerControllerBase = require('./logger.controllerbase');

class FileLoggerController extends LoggerControllerBase {
    constructor() {
        super();
    }
    log(logEvent) {
        console.log('File Logger Logged');
    }
}

module.exports = FileLoggerController;