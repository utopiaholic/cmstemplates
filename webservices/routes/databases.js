var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET databases. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(`{ "databases" : ${JSON.stringify(config.development.databases)} }`);
});

module.exports = router;
