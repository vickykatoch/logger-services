const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const config = require('../config/config');
const rfs = require('rotating-file-stream');


const logStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: config.logPath
});


module.exports = () => {
    return morgan(config.logFormat, { stream: logStream });
};