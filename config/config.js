const cfg = {
    port : 8000,
    logPath : '/Users/balwinderkatoch/bk/logs/bunyan.log',
    logFormat : ':date[iso] (:req[user]) :status :method :url :res[content-length] :response-time ms',
    loggerName : 'file',
    logWriter : {
        instanceCount : 4,
        port : 12000,
        type : 'file'
    }
};

module.exports = cfg;