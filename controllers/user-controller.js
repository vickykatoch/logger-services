const express = require('express');
const router = express.Router();

router.get('/:user',(req,res) => {
    res.json({user: 'BK', name : 'Balwidner Katoch'});
});

module.exports = router;