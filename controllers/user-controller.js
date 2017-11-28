const express = require('express');
const router = express.Router();
const logger = require('./logger-controller.factory');

router.get('/:user',(req,res) => {
    logger.log('Hi There');
    res.json({user: 'BK', name : 'Balwidner Katoch'});
});

module.exports = router;