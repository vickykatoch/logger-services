const cfg = {
    port : 8000,
    logPath : 'B://logs',
    logFormat : ':date[iso] (:req[user]) :status :method :url :res[content-length] :response-time ms',
    loggerName : 'file',
    
};

module.exports = cfg;