const cluster = require('cluster');
const config = require('../../config/config');

if(cluster.isMaster) {
    for(let i=1;i<config.logWriter.instanceCount;i++) {
        cluster.fork();
    }
    cluster.on('exit',(worker,code,signal)=> {
        if(code!==0 && !worker.exitedAfterDisconnect) {
            console.log(`Worker : ${worker.id} crashed. Starting a new worker...`);
            cluster.fork();
        }
    });
} else {
    require('./logger.broker');
}