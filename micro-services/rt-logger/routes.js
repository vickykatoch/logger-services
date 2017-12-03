const rtLogController = require('./controllers/rt-log.controller');
var express = require('express');
var router = express.Router();


router.post('/api/logEvents', rtLogController);


module.exports = router;