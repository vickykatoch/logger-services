const fs = require('fs');
const path = require('path');
const defaults = {
    flags: 'a',
    encoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
  };

const logFile = fs.createWriteStream(path.join(__dirname,'mylog.log'),defaults);
const errFile = fs.createWriteStream(path.join(__dirname,'myError.log'),defaults);
const logger = new console.Console(logFile,errFile);

for(let i =0;i<100;i++) {
    logger.log('%s :  Hi There',new Date().toISOString());
}

console.log('%s : Finished Logging',new Date().toISOString());