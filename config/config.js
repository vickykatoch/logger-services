const cfg = {
    port : 8000,
    logPath : 'B://logs',
    logFormat : ':date[iso] (:req[user]) :status :method :url :res[content-length] :response-time ms',
    loggerName : 'file',
    logWriter : {
        instanceCount : 4,
        port : 12000
    }
};

module.exports = cfg;