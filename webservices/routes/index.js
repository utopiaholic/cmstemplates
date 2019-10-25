var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/templates', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(`{ "templates" : ${JSON.stringify(config.development.templates)} }`);
});

router.get('/databases', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(`{ "databases" : ${JSON.stringify(config.development.databases)} }`);
});

module.exports = router;
