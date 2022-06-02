const express = require('express');
const externalModule = require('../logger/logger.js')
const externalModule1 =require('../util/helper.js')
const externalModule2 =require('../validator/formatter.js')
const router = express.Router()
router.get('/test-me', function (req, res) {
    externalModule.w();
   externalModule1.help1();
    externalModule2.trim();
   externalModule2.lowerCase1();
    externalModule2.upperCase1();
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason